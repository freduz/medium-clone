import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {ReactiveFormsModule} from '@angular/forms'
import {ErrorComponent} from './components/alert/error.component'
import {InputComponent} from './components/input/input.component'
import {BackEndErrorModule} from './modules/back-end-error/back-end-error.module'

@NgModule({
  declarations: [InputComponent, ErrorComponent],
  imports: [CommonModule, ReactiveFormsModule, BackEndErrorModule],
  providers: [],
  exports: [InputComponent],
})
export class SharedModule {}
