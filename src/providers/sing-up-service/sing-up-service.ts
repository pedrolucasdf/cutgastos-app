import { API_ENDPOINT } from './../../utils/constants'; 
import { JsonReturn } from './../../models/jsonReturn';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';

/*
  Generated class for the SingUpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SingUpServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello SingUpServiceProvider Provider');
  }

  createAccount(userData: Usuario): Observable<JsonReturn>{ 
    return this.http.post<JsonReturn>(API_ENDPOINT+"usuario", userData); 
  } 

  updateAccount(userData: Usuario): Observable<JsonReturn>{
    return this.http.put<JsonReturn>(API_ENDPOINT+"usuario?id="+userData.id, userData);
  }

  readAccount(userData: Usuario): Observable<JsonReturn>{
    return this.http.get<JsonReturn>(API_ENDPOINT+"usuario?id="+userData.id);
  }

  deleteAccount(userData: Usuario): Observable<JsonReturn>{
    return this.http.delete<JsonReturn>(API_ENDPOINT+"usuario?id="+userData.id);
  }


}
