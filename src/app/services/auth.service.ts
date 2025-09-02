import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }
  api = 'https://7b898b5659ea.ngrok-free.app/api';

  getlogincredentials(data:any):Observable<any>{
    return this.http.post(`${this.api}/auth/login`,data);
  }

  getloggeduser():Observable<any>{
    return this.http.get(`${this.api}/viewuser`);
  }

  



}


  
 
