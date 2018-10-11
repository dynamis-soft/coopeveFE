import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GlobalService } from '../../../shared/services/global.service';
import { sha256, sha224 } from 'js-sha256';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {

    constructor(private router: Router, public globalService: GlobalService, ) {
        localStorage.setItem('status', '1');
    }/*

    username = '';
    password = '';

    login(): void {
        if (this.username != '' && this.password != '') {

            let json = { username: this.username, password: sha256(this.password) };
            /*{
                "username":"admin",
                "password":"admin"
            }
            *//*
            this.globalService.httpServicesResponse(json, 'login').subscribe(
                data => {
                    let result : any = data;
                    if (result.status=='99'){
                        alert(result.message);
                    }else{
                        this.router.navigate([
                          '/dashboard/home'
                        ]);
                    }
                },
                error => {
                    console.dir(error);
                }
            );
        } else {
                alert('Todos los datos son necesarios');
        }
    }*/
}
