### React Boilerplate TypeScript - start React project in one second

[![Dependencies](https://david-dm.org/Serhii-Boiko/react-boilerplate-ts.svg)](https://github.com/Serhii-Boiko/react-boilerplate-ts)

### Get Started
    sudo apt-get update && sudo apt-get install yarn
    yarn
    yarn start
    
[yarn docs](https://yarnpkg.com/lang/en/docs/install/)
        
### Provides
- React 16.12.0
- React-Redux 7.1.3
- React-Router 5.1.2
- React-Intl 3.12.0

### Engines
- Node.JS 12.15.0
- npm 6.13.4
- yarn": 1.21.1

### Development
- webpack-dev-server
- react-hot-loader
- redux-devtools
- redux-logger

### Building
- WebPack 4
- Babel 7
- yarn
- webpack-bundle-analyzer
- Support .env 

### HTTP
- axios
- redux-sage 

### Style support
- CSS
- SASS
- LESS
- Styled Component


### Code Quality
- tslint
- prettier
- TypeScript
- pre commit hooks

### Testing
- Jest

### Local store
Custom middleware for saving redux state to browser local storage.
You can select what data you need to save and restore.
`localStorageMiddleware(serializer)` - the redux middleware.
You should pass the `serializer` object. Example:


```
// src/store/index.tsx
const serializer = {
  value: (store) => store.example.value,
};
```
The object describes what data should be saved in the local store and how that data gets from the redux state.

`reHydrateState(defaultState, deserealizer)` - the function for getting data from local store and pass to redux store.

```
// src/store/rootReducer.tsx
const defaultState = {
  value: 0,
};

const initState = reHydrateState(defaultState, {
  value: (initialState: any, value: number) => {
    initialState.value = value;

    return initialState;
  },
});
```


### Styled Media Query

Media query for Styled Components

Example default usage:

```
const Box = styled.div`
  background: black;
  
  ${media.lessThan("mobileM")`
    background: red;
  `}

  ${media.between("tablet", "laptop")`
    background: green;
  `}
 
  ${media.greaterThan("laptopL")`
    background: blue;
  `}
`;
```

Example media query based on Redux and State or any number:

```
const Box = styled.div`
  background: black;
 
  ${(props) =>  media.stateMediaQueryLessThan("mobileM", props.width)`
    background: red;
  `}
 
  ${(props) => media.stateMediaQueryBetween("tablet", "laptop", props.width)`
    background: green;
  `}
 
  ${(props) => media.stateMediaQueryGreaterThan("laptopL", props.width)`
    background: blue;
  `}
 `;

```



### Env variables:
Your project can consume variables declared in your environment as if
they were declared locally in your JS files. By default you will have
NODE_ENV defined for you, and any other environment variables starting
with REACT_APP_.

```
WARNING: Do not store any secrets (such as private API keys) in your React app!
```

### Commands list:
   `yarn clean` - clean dist folder
    
   `yarn build` - build project to dist folder
   
   `yarn analyzer` - show bundle analyzer page 
   
   `yarn start` - start dev-server with hot-reloading
   
   `yarn test` - start all tests from test folder
   
   `lint:ts` - checking code;
   
   `lint:ts:fix` - checking and auto-correct code;

### Folder structure
    - config
        - nginx [Basic config]
        - webpack [Webpack configs]
    - dist [Built production folder]
    - public [index.html folder]
    - src
        - @types [TypeScript types folder]
        - app
            - Example [Example Feature]
                - components
                - containers
                - actions.ts
                - actionTypes.ts
                - constants.ts
                - index.ts
                - interfaces.ts
                - reducer.ts
                - router.tsx
                - sages.ts
            - Settings [App settings]
            - app.tsx
            - router.tsx [Main router]
        - common [Geeneral conponents and utils]
        - store [Store setup (Redux + Redux-Router + Saga)]
        - index.tsx [File initialize React app]
    - test [Folder for tests]

### Dependencies and dev-dependencies from package.json.
```json
{
   "dependencies": {
     "@babel/runtime": "^7.8.4",
     "connected-react-router": "^6.6.1",
     "husky": "^4.2.1",
     "lint-staged": "^10.0.7",
     "react": "^16.12.0",
     "react-dom": "^16.12.0",
     "react-intl": "2",
     "react-redux": "^7.1.3",
     "react-router-dom": "^5.1.2",
     "redux": "^4.0.5",
     "redux-devtools-extension": "^2.13.8",
     "redux-logger": "^3.0.6",
     "redux-saga": "^1.1.3",
     "styled-components": "^5.0.1"
   },
   "devDependencies": {
     "@babel/core": "^7.8.4",
     "@babel/plugin-proposal-class-properties": "^7.8.3",
     "@babel/plugin-proposal-object-rest-spread": "^7.8.3",
     "@babel/plugin-transform-runtime": "^7.8.3",
     "@babel/preset-env": "^7.8.4",
     "@babel/preset-react": "^7.8.3",
     "@babel/preset-typescript": "^7.8.3",
     "@types/history": "^4.7.5",
     "@types/react": "^16.9.19",
     "@types/react-dom": "^16.9.5",
     "@types/react-hot-loader": "^4.1.1",
     "@types/react-intl": "2.3.18",
     "@types/react-redux": "^7.1.7",
     "@types/react-router-dom": "^5.1.3",
     "@types/redux-logger": "^3.0.7",
     "babel-loader": "^8.0.6",
     "css-loader": "^3.4.2",
     "file-loader": "^5.0.2",
     "html-webpack-harddisk-plugin": "^1.0.1",
     "html-webpack-plugin": "^3.2.0",
     "less-loader": "^5.0.0",
     "mini-css-extract-plugin": "^0.9.0",
     "node-sass": "^4.13.1",
     "optimize-css-assets-webpack-plugin": "^5.0.3",
     "prettier": "^1.19.1",
     "sass-loader": "^8.0.2",
     "script-ext-html-webpack-plugin": "^2.1.4",
     "simple-progress-webpack-plugin": "^1.1.2",
     "style-loader": "^1.1.3",
     "terser-webpack-plugin": "^2.3.4",
     "tslint": "^6.0.0",
     "tslint-config-prettier": "^1.18.0",
     "tslint-immutable": "^6.0.1",
     "tslint-loader": "^3.5.4",
     "tslint-plugin-prettier": "^2.1.0",
     "tslint-react": "^4.2.0",
     "typescript": "^3.7.5",
     "webpack": "^4.41.5",
     "webpack-bundle-analyzer": "^3.6.0",
     "webpack-cli": "^3.3.10",
     "webpack-dev-server": "^3.10.3",
     "webpack-merge": "^4.2.2"
   }
}
```
