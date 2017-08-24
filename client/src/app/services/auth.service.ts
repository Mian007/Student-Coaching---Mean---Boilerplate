import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {
  server = "http://localhost:8080";
  authToken;
  user;
  options;

  constructor(private http: Http) { }

  createAuthenticationHeaders(){
    // load token from loadToken()
    this.loadToken();
    this.options = new RequestOptions({
      headers: new Headers({
        'Content-Type': 'application/json',
        'authorization': this.authToken
      })
    });
  }

  loadToken() {
    const token = localStorage.getItem('token');
    this.authToken = token;
  }

Register(user) {
  return this.http.post(this.server + '/authentication/register', user).map(res => res.json());
  }

checkEmail(email) {
  return this.http.get(this.server + '/authentication/register/check-email/' + email).map(res => res.json());
  }

  Login(user) {
    return this.http.post(this.server + '/authentication/login', user).map(res => res.json());
    }

  Logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
    }

  storeData(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user
    }

    getProfile() {
      this.createAuthenticationHeaders();
      return this.http.get(this.server + '/authentication/profile', this.options).map(res => res.json());
    }

    loggedIn() {
      return tokenNotExpired();
    }

  }
