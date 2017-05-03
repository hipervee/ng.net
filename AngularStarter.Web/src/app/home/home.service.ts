import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HomeService {

    constructor(private http: Http) { }

    getPersons() {
        return this.http.get('/Home/Persons').toPromise();
    }
}
