import { Injectable } from '@angular/core'

@Injectable({ providedIn: 'root' })
export class AuthService {

  login(username: string, password: string) {
    if (username =='admin' && password == 'admin123') {
      localStorage.setItem('loggedIn', 'true')
      return true
    }
    return false
  }

  logout() {
    localStorage.removeItem('loggedIn')
  }

  isLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true'
  }

}