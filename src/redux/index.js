import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';
import configureStore from './CreateStore'
import rootSaga from '../sagas/'
import { VERSION_REDUCER_KEY } from './ReduxMigrate'


export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    login: require('./LoginRedux').reducer,
    form : formReducer,
    [VERSION_REDUCER_KEY]: (state = {}) => state,
  })
  return configureStore(rootReducer, rootSaga)
}
