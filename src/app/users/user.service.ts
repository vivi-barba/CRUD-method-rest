import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestCreate, RequestUpdate, ResponseCreate, ResponseUpdate, ResponseUser, ResponseUsers } from './user.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private url = 'https://reqres.in/api/users';

  constructor(
    private http: HttpClient 
    ) { }

  getUsers():Observable<ResponseUsers>{
    return this.http.get<ResponseUsers>(this.url);

  }
//modelo para cada metodo get,post,put e delete
  createUsers( request: RequestCreate): Observable<ResponseCreate> {
    return this.http.post<ResponseCreate>(this.url, request);
  }
  
  getUser(id: string):Observable<ResponseUser>{
    const _url = `${this.url}/${id}`;

    'https://reqres.in/api/users/id'
    return this.http.get<ResponseUser>(_url);

  }
  updateUser(id: string, request: RequestUpdate): Observable<ResponseUpdate> {
        const _url = `${this.url}/${id}`;

    return this.http.put<ResponseUpdate>(this.url,request);
  }

  deleteUser(id: string): Observable<any> {
        const _url = `${this.url}/${id}`;

    return this.http.delete<any>(_url);
    
  }

}
