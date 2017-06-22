import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {

  constructor(public http: Http) {

  }

  getUsers() {
      return this.http.get('https://randomuser.me/api/?results=25').map(
          res => res.json()
      ).toPromise();
  }

}
