import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */

import { LoginTypes } from '../redux/LoginRedux'
import { StartupTypes } from '../redux/StartupRedux'

/* ------------- Sagas ------------- */

import { login } from './LoginSagas'
import { startup } from './StartupSagas'
/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.


/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield [
    // some sagas only receive an action
  //  takeLatest(StartupTypes.STARTUP, startup),
    //takeLatest(LoginTypes.LOGIN_REQUEST, login),
  ]
}
