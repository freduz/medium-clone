import {Component, OnInit} from '@angular/core'
import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'
import {
  anonymousSelector,
  currentUserSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selector'
import {IAppState} from 'src/app/shared/types/appState.interface'
import {ICurrentUser} from 'src/app/shared/types/currentUser.interface'

@Component({
  selector: 'mc-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>
  isAnonymous$!: Observable<boolean>
  currentUser$!: Observable<ICurrentUser | null>
  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.select(isLoggedInSelector)
    this.isAnonymous$ = this.store.select(anonymousSelector)
    this.currentUser$ = this.store.select(currentUserSelector)
  }
}
