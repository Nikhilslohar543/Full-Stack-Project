import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpencesService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:8080/api/expences";

  getExpenses(userId: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}/user/${userId}`);
  }

  getExpenceById(id:any):Observable<any>{

    return this.http.get(`${this.url}/${id}`);

  }

  addExpences(userId:any,expences:any):Observable<any>{

    return this.http.post(`${this.url}/${userId}`, expences,{responseType:'text'});

  }

  updateExpences(userId:any,expences:any){

    return this.http.put(`${this.url}/${userId}`, expences,{responseType:'text'});

  }

  deleteExpences(id:any):Observable<any>{

    return this.http.delete(`${this.url}/${id}`,{responseType:'text'})

  }

}
