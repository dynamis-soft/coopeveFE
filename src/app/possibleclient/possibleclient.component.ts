import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';


@Component({
    selector: 'app-possibleclient',
    templateUrl: './possibleclient.component.html'
})
export class PossibleclientComponent implements OnInit {

    data: any;
    closeResult: string;
    value: any;
    constructor(public globalService: GlobalService, private router: Router, private excelService: ExcelService) {

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
    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.data, 'Cliente');
    }
    search() {
        this.globalService.httpServicesResponse({'value': this.value}, 'client/getClientValue').subscribe(
            data => {
                let result: any = data;
                console.log(result);
                this.data = result.data;
            },
            error => {
                console.dir(error);
            }
        );

    }
}
