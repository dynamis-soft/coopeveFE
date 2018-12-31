import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-afiliateedit',
    templateUrl: './afiliateedit.component.html'
})
export class AfiliateeditComponent implements OnInit {

    data: any;
    closeResult: string;
    id;
    constructor(public globalService: GlobalService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
        });
        this.globalService.httpServicesResponse({ 'id': this.id }, 'afiliate/getAfiliateId').subscribe(
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
