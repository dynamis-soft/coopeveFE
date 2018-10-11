import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';




@Injectable({
    providedIn: 'root',
})
export class GlobalService {

    constructor(private http: HttpClient) {
        // localStorage.setItem('url', 'http://localhost:8080/canalesbe/api/');
        localStorage.setItem('url', 'http://localhost:8090/dynamis-projects/coopeveBE/api/');
    }
    public getUrl() {
        return localStorage.getItem('url');
    }
    httpServicesResponse(data, service) {
        // tslint:disable-next-line:prefer-const
        let url = this.getUrl() + service;
        let headers: any;
        headers = new HttpHeaders();
        headers = headers.append('Accept', 'application/json');
        headers = headers.append('Content-Type', 'application/json');
        return this.http.post(url, JSON.stringify(data), { headers: headers });
    }


}
