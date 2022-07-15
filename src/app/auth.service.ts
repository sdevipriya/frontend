import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "http://localhost:8085/user/login"
  private signupUrl = "http://localhost:8085/user/signup"
  private singleMediaUrl = "http://localhost:8762/media/saveMedia"
  private multiMediUrl = "http://localhost:8762/media/saveMultiMedia"
  private getmediaUrl = "http://localhost:8762/media/myMedia/"
  baseApiUrl="https://file.io"
  constructor(private http:HttpClient) { }

  
   loginUser(user){
     return this.http.post(this.loginUrl,user)
   }

  registerUser(user){
    return this.http.post(this.signupUrl,user)
  }
  saveMedia(media,token){
      let headers = new HttpHeaders({
      'Authorization': 'Bearer '+sessionStorage.getItem('token') });
     let options = { headers: headers };
    console.log("headers:"+headers.get('Authorization'));
    return this.http.post(this.singleMediaUrl,media,options);
  }
  saveMultiMedia(media){
    let headers = new HttpHeaders({
      'Authorization': 'Bearer '+sessionStorage.getItem('token') });
     let options = { headers: headers };
    return this.http.post(this.multiMediUrl,media,options);
  }
}
