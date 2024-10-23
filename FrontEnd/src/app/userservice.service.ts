import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:8080/users";

  login(username:String, password:String):Observable<any>{
    return this.http.post(`${this.url}/login`,{username,password});
  }

  signup(user:any):Observable<any>{
    return this.http.post(`${this.url}/signup`,user, { responseType: 'text' })
  }

  logout():Observable<any>{
    return this.http.get(`${this.url}/logout`);
  }
}
