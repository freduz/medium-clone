import {Component, Input, OnInit} from '@angular/core'
import {IBackEndError} from 'src/app/shared/types/backend-error.interface'

@Component({
  selector: 'mc-backend-error',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css'],
})
export class ErrorMessageComponent implements OnInit {
  @Input() errors!: IBackEndError
  errorMessages!: string[]
  constructor() {}

  ngOnInit(): void {
    this.generateErrors()
  }

  generateErrors() {
    this.errorMessages = Object.keys(this.errors).map((key) => {
      const message = this.errors[key]
      return `${key} - ${message}`
    })
  }
}
