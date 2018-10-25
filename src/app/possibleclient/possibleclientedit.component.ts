import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    selector: 'app-possibleclientedit',
    templateUrl: './possibleclientedit.component.html'
})
export class PossibleclienteditComponent implements OnInit {

    data: any;
    closeResult: string;
    id;
    constructor(public globalService: GlobalService,private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params['id'];
         });
        this.globalService.httpServicesResponse({'id': this.id}, 'client/getClientId').subscribe(
            data => {
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
