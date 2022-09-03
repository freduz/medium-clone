import {Component, OnInit} from '@angular/core'
import {Store, select} from '@ngrx/store'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {registerAction} from '../../store/actions/register.action'
import {IAppState} from 'src/app/shared/types/appState.interface'
import {Observable} from 'rxjs'
import {errorsSelector, isSubmittingSelector} from '../../store/selector'
import {AuthService} from '../../services/auth.service'
import {IBackEndError} from 'src/app/shared/types/backend-error.interface'

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup
  isSubmitting$!: Observable<boolean>
  backendErrors$!: Observable<IBackEndError | null>

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.generateRegisterForm()
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.select(errorsSelector)
  }

  generateRegisterForm() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  get userName(): FormControl {
    return <FormControl>this.registerForm.get('username')
  }

  get email(): FormControl {
    return <FormControl>this.registerForm.get('email')
  }

  get password(): FormControl {
    return <FormControl>this.registerForm.get('password')
  }

  registerAccount() {
    const request = {
      user: this.registerForm.value,
    }
    this.store.dispatch(registerAction({request}))
  }
}
