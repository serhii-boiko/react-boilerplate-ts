### React Boilerplate TypeScript - start React project in one second

[![Dependencies](https://david-dm.org/Serhii-Boiko/react-boilerplate-ts.svg)](https://github.com/Serhii-Boiko/react-boilerplate-ts)

### Get Started
    sudo apt-get update && sudo apt-get install yarn
    yarn
    yarn start
    
[yarn docs](https://yarnpkg.com/lang/en/docs/install/)
        
### Provides
- React 17.0.2
- React-Redux 7.2.4
- React-Router 5.2.0
- React-Intl 5.20.4

### Engines
- Node.JS 12.15.0
- npm 6.13.4
- yarn: 1.21.1

### Development
- webpack-dev-server
- react-hot-loader
- redux-devtools
- redux-logger

### Building
- WebPack 5
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
    "@babel/runtime": "^7.14.6",
    "connected-react-router": "^6.9.1",
    "history": "^5.0.0",
    "lint-staged": "^11.0.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-intl": "^5.20.4",
    "react-redux": "^7.2.4",
    "react-router-dom": "^5.2.0",
    "redux": "^4.1.0",
    "redux-devtools-extension": "^2.13.9",
    "redux-logger": "^3.0.6",
    "redux-saga": "^1.1.3",
    "styled-components": "^5.3.0"
  },
  "devDependencies": {
    "@babel/core": "^7.14.6",
    "@babel/plugin-proposal-class-properties": "^7.14.5",
    "@babel/plugin-proposal-object-rest-spread": "^7.14.7",
    "@babel/plugin-transform-runtime": "^7.14.5",
    "@babel/preset-env": "^7.14.7",
    "@babel/preset-react": "^7.14.5",
    "@babel/preset-typescript": "^7.14.5",
    "@types/history": "^4.7.9",
    "@types/react": "^17.0.14",
    "@types/react-dom": "^17.0.9",
    "@types/react-hot-loader": "^4.1.1",
    "@types/react-intl": "3.0.0",
    "@types/react-redux": "^7.1.18",
    "@types/react-router-dom": "^5.1.8",
    "@types/redux-logger": "^3.0.9",
    "@types/styled-components": "^5.1.11",
    "@types/webpack-env": "^1.16.2",
    "babel-loader": "^8.2.2",
    "babel-plugin-styled-components": "^1.13.2",
    "css-loader": "^5.2.6",
    "dotenv": "^10.0.0",
    "file-loader": "^6.2.0",
    "html-webpack-harddisk-plugin": "^2.0.0",
    "html-webpack-plugin": "^5.3.2",
    "husky": "^7.0.1",
    "jest": "^27.0.6",
    "less-loader": "^10.0.1",
    "mini-css-extract-plugin": "^2.1.0",
    "node-sass": "^6.0.1",
    "optimize-css-assets-webpack-plugin": "^6.0.1",
    "prettier": "^2.3.2",
    "sass-loader": "^12.1.0",
    "script-ext-html-webpack-plugin": "^2.1.5",
    "simple-progress-webpack-plugin": "^2.0.0",
    "style-loader": "^3.0.0",
    "tslint": "^6.1.3",
    "tslint-config-prettier": "^1.18.0",
    "tslint-immutable": "^6.0.1",
    "tslint-loader": "^3.5.4",
    "tslint-plugin-prettier": "^2.3.0",
    "tslint-react": "^5.0.0",
    "typescript": "^4.3.5",
    "webpack": "^5.44.0",
    "webpack-bundle-analyzer": "^4.4.2",
    "webpack-cli": "^4.7.2",
    "webpack-dev-server": "^3.11.2",
    "webpack-merge": "^5.8.0"
  }
}
```
