import { Component, OnInit } from '@angular/core';
import { sha256, sha224 } from 'js-sha256';
import { GlobalService } from '../shared/services/global.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

  data: any = {
    name: "",
    username: "",
    status: ""
  };
  password: any = "";
  closeResult: string;
  id = 0;
  constructor(public globalService: GlobalService, private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    if (this.id != 0) {
      this.globalService.httpServicesResponse({ 'id': this.id }, 'admin/getUserId').subscribe(
        data => {
          // tslint:disable-next-line:prefer-const
          let result: any = data;
          this.data = result.data[0];
          console.log(this.data);
        },
        error => {
          console.dir(error);
        }
      );
    }

  }
  edit() {
    let pass = "";
    if (this.password == "") {
      pass = this.data.password;
    } else {
      pass = this.password;
    }
    let json = { username: this.data.username, password: sha256(pass), status: this.data.status, name: this.data.name };
    if (this.id != 0) {
      this.globalService.httpServicesResponse(json, 'admin/edit').subscribe(
        data => {
          let result: any = data;
          alert("Registro actualizado");
          this.router.navigate([
            '/list'
          ]);
        },
        error => {
          console.dir(error);
        }
      );
    } else {
      this.globalService.httpServicesResponse(json, 'admin/insert').subscribe(
        data => {
          let result: any = data;
          alert("Registro agregado");
          this.router.navigate([
            '/list'
          ]);
        },
        error => {
          console.dir(error);
        }
      );
    }


  }
}

