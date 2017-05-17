import { compose, createStore, applyMiddleware } from 'redux' //use default redux createstore for now
import createSagaMiddleware from 'redux-saga'
import { persistStore, autoRehydrate } from 'redux-persist'
import { migration } from './ReduxMigrate'
import { AsyncStorage } from 'react-native'
//import ReduxThunk from 'redux-thunk';


const storeConfig = {
  storage: AsyncStorage,
  blacklist: ['login'],
  // whitelist: [],  An empty array means 'don't store any reducers'
  // transforms: []
}

export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */

  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  enhancers.push(applyMiddleware(...middleware))

  /* ------------- AutoRehydrate Migrate ------------- */

  // add the autoRehydrate & Persist Migrate
  enhancers.push(migration)
  enhancers.push(autoRehydrate())

  const store = createStore( rootReducer, compose(...enhancers) )

  /* ------------- Persist store ------------- */

  persistStore(store, storeConfig, () => {
    console.log('rehydration complete')
    console.log(store.getState())
  })
  // kick off root saga
  sagaMiddleware.run(rootSaga)


  return store;
}
