import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ErrorMessageComponent} from './components/error-message/error-message.component'

@NgModule({
  declarations: [ErrorMessageComponent],
  imports: [CommonModule],
  providers: [],
  exports: [ErrorMessageComponent],
})
export class BackEndErrorModule {}
