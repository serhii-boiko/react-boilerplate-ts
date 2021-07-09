import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { History } from 'history';
import reducers, { Store } from './rootReducer';
import rootSaga from './rootSaga';
import { localStorageMiddleware } from './middleware/localstore';

const serializer = {
  value: (store: Store) => store.example.value,
};

export default function configureStore(initialState: any, history: History) {
  const newCompose = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
  const routeMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  // @ts-ignore
  const middlewares = [sagaMiddleware, routeMiddleware, localStorageMiddleware(serializer)];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(
    reducers(history),
    initialState,
    // @ts-ignore
    newCompose(applyMiddleware(...middlewares))
  );

  let sagaTask = sagaMiddleware.run(rootSaga);

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });

    module.hot.accept('./rootSaga', () => {
      const nextRootSagas = require('./rootSaga').default;
      sagaTask.cancel();
      sagaTask.toPromise().then(() => {
        sagaTask = sagaMiddleware.run(nextRootSagas);
      });
    });
  }

  return store;
}
