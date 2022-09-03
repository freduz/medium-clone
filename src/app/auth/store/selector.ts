import {createFeatureSelector, createSelector} from '@ngrx/store'

import {IAppState} from 'src/app/shared/types/appState.interface'
import {IAuthState} from '../types/authState.interface'

export const authFeatureSelector = (state: IAppState): IAuthState => state.auth

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.isSubmitting
)

export const errorsSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.errors
)

export const currentUserSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.currentUser
)

export const isLoggedInSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.isLoggedIn
)

export const anonymousSelector = createSelector(
  authFeatureSelector,
  (state: IAuthState) => state.isLoggedIn === false
)
