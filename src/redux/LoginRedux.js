import { createReducer, createActions } from 'reduxsauce';


/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  loginRequest: ['email', 'password'],
  loginSuccess: ['user'],
  loginFailure: ['error'],
  logout: null
})

export const LoginTypes = Types;
export default Creators;

// the initial state of this reducer
export const INITIAL_STATE = {
  user: null,
  loggedIn: null,
  loading: false,
}


/* ------------- Reducers ------------- */

// we're attempting to login
export const request = (state) => ({ ...state , loading: true })

// we've successfully logged in
export const success = (state, user ) =>
  ({ ...state, loading: false, loggedIn: true, user: user })

// we've had a problem logging in
export const failure = (state, { error }) =>
  ({ ...state, loading: false, loggedIn: false, error})

// we've logged out
export const logout = (state) => INITIAL_STATE


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.LOGIN_REQUEST]: request,
  [Types.LOGIN_SUCCESS]: success,
  [Types.LOGIN_FAILURE]: failure,
  [Types.LOGOUT]: logout
})
