import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {PersistenceService} from 'src/app/shared/services/persistence.service'
import {AuthService} from '../../services/auth.service'
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.action'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({request}) => {
        return this.authService.login(request).pipe(
          map((currentUser) => {
            this.persistentService.set('accessToken', currentUser.token)
            return loginSuccessAction({currentuser: currentUser})
          }),
          catchError((err: HttpErrorResponse) => {
            return of(loginFailureAction({errors: err.error.errors}))
          })
        )
      })
    )
  )

  redirectAfterLogin$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => this.router.navigateByUrl('/'))
      ),
    {
      dispatch: false,
    }
  )

  constructor(
    private authService: AuthService,
    private actions$: Actions,
    private persistentService: PersistenceService,
    private router: Router
  ) {}
}
