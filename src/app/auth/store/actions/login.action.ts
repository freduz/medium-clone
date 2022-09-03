import {createAction, props} from '@ngrx/store'
import {IBackEndError} from 'src/app/shared/types/backend-error.interface'
import {ICurrentUser} from 'src/app/shared/types/currentUser.interface'
import {ILoginRequest} from '../../types/login-request.interface'
import {ActionTypes} from '../actionTypes'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{request: ILoginRequest}>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{currentuser: ICurrentUser}>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{errors: IBackEndError}>()
)
