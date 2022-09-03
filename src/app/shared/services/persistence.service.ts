import {Injectable} from '@angular/core'

@Injectable()
export class PersistenceService {
  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (e) {
      console.error('Error', e)
    }
  }

  get(key: string) {
    try {
      return localStorage.getItem(key)
    } catch (e) {
      return null
      console.error('Error', e)
    }
  }
}
