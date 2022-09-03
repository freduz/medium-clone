import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'

import {AppRoutingModule} from './app-routing.module'
import {AppComponent} from './app.component'
import {AuthModule} from './auth/auth.module'
import {environment} from 'src/environments/environment'
import {EffectsModule} from '@ngrx/effects'
import {HttpClientModule} from '@angular/common/http'
import {NgHttpLoaderModule} from 'ng-http-loader'
import {TopBarModule} from './shared/modules/topbar/topbar.module'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
    AuthModule,
    TopBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
