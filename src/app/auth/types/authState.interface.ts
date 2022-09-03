import {IBackEndError} from 'src/app/shared/types/backend-error.interface'
import {ICurrentUser} from 'src/app/shared/types/currentUser.interface'

export interface IAuthState {
  isSubmitting: boolean
  currentUser: ICurrentUser | null
  isLoggedIn: boolean | null
  errors: IBackEndError | null
}
