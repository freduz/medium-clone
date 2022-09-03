import {HttpErrorResponse} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Router} from '@angular/router'
import {createEffect, Actions, ofType} from '@ngrx/effects'
import {catchError, map, of, switchMap, tap} from 'rxjs'
import {PersistenceService} from 'src/app/shared/services/persistence.service'
import {AuthService} from '../../services/auth.service'
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action'

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() =>
    this.action$.pipe(
      ofType(registerAction),
      switchMap(({request}) => {
        return this.authService.register(request).pipe(
          map((data) => {
            this.persistenceService.set('accessToken', data.token)
            return registerSuccessAction({currentUser: data})
          }),
          catchError((err: HttpErrorResponse) =>
            of(registerFailureAction({errors: err.error.errors}))
          )
        )
      })
    )
  )

  redirectAfterRegister$ = createEffect(
    () =>
      this.action$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          return this.router.navigateByUrl('/')
        })
      ),
    {
      dispatch: false,
    }
  )

  constructor(
    private action$: Actions,
    private authService: AuthService,
    private persistenceService: PersistenceService,
    private router: Router
  ) {}
}
