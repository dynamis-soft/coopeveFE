import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-update',
    template: `<div id="loader"><img src="assets/img/loader-preview.svg" alt="loading"></div>`
})
export class UpdateComponent implements OnInit {

    constructor(private router: Router, public globalService: GlobalService) { }

    ngOnInit() {
        this.Associated();        
    }

    Associated() {
        this.globalService.httpServicesResponse({}, 'update/updateAssociated').subscribe(
            data => {
                let result: any = data;
                this.PossibleClient();
            },
            error => {
                console.dir(error);
            }
        );
    }
    PossibleClient() {
        this.globalService.httpServicesResponse({}, 'update/updatePossibleClient').subscribe(
            data => {
                let result: any = data;
                this.Clients();
            },
            error => {
                console.dir(error);
            }
        );
    }
    Clients() {
        this.globalService.httpServicesResponse({}, 'update/updateClients').subscribe(
            data => {
                let result: any = data;
                this.Contacts();
            },
            error => {
                console.dir(error);
            }
        );
    }
    Contacts() {
        this.globalService.httpServicesResponse({}, 'update/updateContacts').subscribe(
            data => {
                let result: any = data;
                this.Deals();
            },
            error => {
                console.dir(error);
            }
        );
    }
    Deals() {
        this.globalService.httpServicesResponse({}, 'update/updateDeals').subscribe(
            data => {
                let result: any = data;
                this.Afiliate();
            },
            error => {
                console.dir(error);
            }
        );
    }
    Afiliate() {
        this.globalService.httpServicesResponse({}, 'update/updateAfiliate').subscribe(
            data => {
                let result: any = data;
                if (result.status == '99') {
                    alert(result.message);
                } else {
                    alert("Se actualizo el sistema.");
                    this.router.navigate([
                        '/dashboard'
                    ]);
                }
            },
            error => {
                console.dir(error);
            }
        );
    }

}
