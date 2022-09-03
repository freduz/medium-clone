import {createReducer, on, Action} from '@ngrx/store'

import {IAuthState} from '../types/authState.interface'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from './actions/login.action'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from './actions/register.action'

const initialState: IAuthState = {
  isSubmitting: false,
  currentUser: null,
  isLoggedIn: null,
  errors: null,
}

const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      errors: null,
    })
  ),
  on(
    registerSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      currentUser: action.currentUser,
    })
  ),
  on(
    registerFailureAction,
    (state, action): IAuthState => ({
      ...state,
      isSubmitting: false,
      errors: action.errors,
    })
  ),
  on(
    loginAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
      errors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): IAuthState => ({
      ...state,
      currentUser: action.currentuser,
      isSubmitting: false,
      isLoggedIn: true,
    })
  ),
  on(
    loginFailureAction,
    (state, action): IAuthState => ({
      ...state,
      errors: action.errors,
      isSubmitting: false,
      isLoggedIn: false,
    })
  )
)
export function reducers(state: IAuthState, action: Action) {
  return authReducer(state, action)
}
