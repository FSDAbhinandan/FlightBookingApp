import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url:string="http://localhost:9090/generate-token";
  urlcurrent:string="localhost:9090/current-user"
  baseUrl:string="http://localhost:9090/";

  constructor(private http:HttpClient) { }

  //getCurrentUser: getting user details of currently logged in user
  public getCurrentUser(){
    return this.http.get(this.baseUrl+'current-use');
  }

  //generating token

  public generateToken(loginData:any){
    return this.http.post(this.baseUrl+'generate-token',loginData);
  }

  //login user : set token to local storage

  public loginUser(token:string){
    localStorage.setItem('token',token);
    return true;
  }

  //isLogin: user is loggedin or not

  public isLoggedIn(){
    let tokenstr = localStorage.getItem('token');
    if(tokenstr==null || tokenstr==''|| tokenstr==undefined){
      return false;
    }else{
      return true;
    }
  }

  //logOut: remove token from localstorage

  public logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //getToken

  public getToken(){
   return localStorage.getItem('token');
  }
  //setUser: Setting user details in local storage

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //getUser; Getting user details from localstorage

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr!=null){
      return JSON.parse(userStr);
    }else{
      this.logOut();
      return null;
    }
  }
  
  //getUserRole: getting roles or authority of user

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
