import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  api = 'https://dummyjson.com/auth';

  getlogincredentials(data:any):Observable<any>{
    return this.http.post(`${this.api}/login`,data);
  }



}


  
 
