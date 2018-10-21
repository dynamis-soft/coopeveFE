import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-quotation',
    templateUrl: './quotation.component.html'
})
export class QuotationComponent implements OnInit {

    data: any;
    closeResult: string;
    constructor(public globalService: GlobalService, private router: Router) {

    }

    ngOnInit() {
        this.globalService.httpServicesResponse({}, 'quotation/getquotationAll').subscribe(
            data => {
                // tslint:disable-next-line:prefer-const
                let result: any = data;
                // tslint:disable-next-line:triple-equals
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
            '/quotationedit', id
        ]);

    }

}
