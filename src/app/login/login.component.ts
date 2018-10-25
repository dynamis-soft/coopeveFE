import { Component } from '@angular/core';
import { sha256, sha224 } from 'js-sha256';
import { GlobalService } from '../shared/services/global.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  templateUrl: './login.component.html',
  selector: 'login'
})
export class LoginComponent {

  username = '';
  password = '';
  constructor(private router: Router, public globalService: GlobalService, ) {
    localStorage.setItem("loggin", '0');
  }

  login(): void {
    if (this.username != '' && this.password != '') {
      let json = { username: this.username, password: sha256(this.password) };
      this.globalService.httpServicesResponse(json, 'admin/login').subscribe(
        data => {
          let result: any = data;
          if (result.status == '99') {
            alert(result.message);            
          } else {
            localStorage.setItem("loggin", '1');
            this.router.navigate([
              '/dashboard'
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
  }
}
