import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-possibleclient',
    templateUrl: './possibleclient.component.html'
})
export class PossibleclientComponent implements OnInit {

    data: any;
    closeResult: string;
    constructor(public globalService: GlobalService,private router: Router) {

    }

    ngOnInit() {
        this.globalService.httpServicesResponse({}, 'client/getClientAll').subscribe(
            data => {
                let result: any = data;
                if (result.status == '99') {
                    alert(result.message);
                } else {
                    this.data = result.data;
                }
            },
            error => {
                console.dir(error);
            }
        );

    }
    edit(id) {
        this.router.navigate([
            '/possibleclientedit', id
        ]);

    }

}
