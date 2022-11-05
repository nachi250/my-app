import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface User {
    id: string;
    email: string;
    firt_name: string;
    last_name: string;
    avatar: string;
  }


@Injectable()
export class ConfigService {

    urlBase = 'https://reqres.in/api/users?page=2';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get(this.urlBase)
  }
}