import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private env: String;

  constructor(private _http: HttpClient) { 
    this.env  = environment.APP_URL;
  }

  registerUser(user: any){
    return this._http.post<any>(this.env + 'user/register', user)
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  loginUser(user: any){
    return this._http.post<any>(this.env + 'user/login',user)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  logout(){
    localStorage.removeItem('token')
  }
}
