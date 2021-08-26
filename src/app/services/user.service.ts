import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string='http://localhost:9090/user/signup';
  constructor(private http:HttpClient) { }

  public addUser(user:any){
   return this.http.post(this.url,user);
  }
}
