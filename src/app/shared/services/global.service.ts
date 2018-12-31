import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class GlobalService {

    constructor(private http: HttpClient) {
        localStorage.setItem('url', '');
        //localStorage.setItem('url', 'https://crmapi.coopeve.com/CoopeveBE/');
        localStorage.setItem('url', 'http://localhost:8080/dynamis-projects/coopeveBE/');
    }
    public getUrl() {
        return localStorage.getItem('url');
    }
    httpServicesResponse(data, service) {
        // tslint:disable-next-line:prefer-const
        let url = this.getUrl() + service;
        let headers: any;
        headers = new HttpHeaders();
        headers = headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
        headers = headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        headers = headers.append('Access-Control-Allow-Headers', '*');
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(url, JSON.stringify(data), { headers: headers });
    }


}
