import {Component, Input} from '@angular/core'
import {FormControl} from '@angular/forms'

@Component({
  selector: 'mc-input',
  templateUrl: './input.component.html',
})
export class InputComponent {
  @Input() type: string = 'text'
  @Input() placeholder: string = ''
  @Input() control!: FormControl

  constructor() {}
}
