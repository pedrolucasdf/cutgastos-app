import { JsonReturn } from './../../models/jsonReturn';
import { API_ENDPOINT } from './../../utils/constants';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello AuthServiceProvider Provider');
  }

  autentication(credentials): Observable<JsonReturn>{
      return this.http.post<JsonReturn>(API_ENDPOINT+"user/autentication", credentials)
  }

}
