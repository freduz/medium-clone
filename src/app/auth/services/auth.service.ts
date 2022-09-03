import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map, Observable} from 'rxjs'

import {ICurrentUser} from 'src/app/shared/types/currentUser.interface'
import {environment} from 'src/environments/environment'
import {IAuthResponse} from '../types/authResponse.interface'
import {ILoginRequest} from '../types/login-request.interface'
import {IRegisterRequest} from '../types/registerRequest.interface'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getUser(data: IAuthResponse) {
    return data.user
  }

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.api + '/users'
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser))
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = environment.api + '/users/login'
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser))
  }
}
