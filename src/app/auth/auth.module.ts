import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {BrowserModule} from '@angular/platform-browser'
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'
import {HttpClientModule} from '@angular/common/http'

import {SharedModule} from '../shared/shared.module'
import {AuthRoutingModule} from './auth-routing.module'
import {RegisterComponent} from './components/register/register.component'
import {reducers} from './store/reducer'
import {AuthService} from './services/auth.service'
import {RegisterEffect} from './store/effects/register.effect'
import {BackEndErrorModule} from '../shared/modules/back-end-error/back-end-error.module'
import {PersistenceService} from '../shared/services/persistence.service'
import {LoginEffect} from './store/effects/login.effect'
import {LoginComponent} from './components/login/login.component'

@NgModule({
  declarations: [RegisterComponent, LoginComponent],
  providers: [CommonModule, AuthService, PersistenceService],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([RegisterEffect, LoginEffect]),
    BackEndErrorModule,
  ],
})
export class AuthModule {}
