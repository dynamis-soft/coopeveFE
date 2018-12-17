import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';


@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {

    data: any;
    value: any;
    closeResult: string;
    constructor(public globalService: GlobalService, private router: Router, private excelService: ExcelService) {

    }

    ngOnInit() {
        this.globalService.httpServicesResponse({}, 'admin/getuserAll').subscribe(
            data => {
                let result: any = data;
                console.log(data);
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
            '/user', id
        ]);

    }
    

}
