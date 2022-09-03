import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {IAppState} from 'src/app/shared/types/appState.interface'
import {IBackEndError} from 'src/app/shared/types/backend-error.interface'
import {AuthService} from '../../services/auth.service'
import {loginAction} from '../../store/actions/login.action'
import {errorsSelector, isSubmittingSelector} from '../../store/selector'

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  inSubmission$!: Observable<boolean>
  errors$!: Observable<IBackEndError | null>

  constructor(private fb: FormBuilder, private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.generateForm()
    this.inSubmission$ = this.store.select(isSubmittingSelector)
    this.errors$ = this.store.select(errorsSelector)
  }

  generateForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    })
  }

  get email(): FormControl {
    return <FormControl>this.loginForm.get('email')
  }

  get password(): FormControl {
    return <FormControl>this.loginForm.get('password')
  }

  login() {
    const request = {
      user: this.loginForm.value,
    }
    this.store.dispatch(loginAction({request}))
  }
}
