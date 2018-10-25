import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    constructor() { }

    get isLoggedIn() {
        if(localStorage.getItem("loggin")=="1")
            return true;
        else
            return false;
    }


}