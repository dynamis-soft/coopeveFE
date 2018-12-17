import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';

@Component({
    selector: 'app-afiliate',
    templateUrl: './afiliate.component.html'
})
export class AfiliateComponent implements OnInit {

    data: any;
    value: any;
    closeResult: string;
    constructor(public globalService: GlobalService, private router: Router, private excelService: ExcelService) {

    }

    ngOnInit() {
        this.globalService.httpServicesResponse({}, 'afiliate/getAfiliateAll').subscribe(
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
            '/afiliateedit', id
        ]);

    }
    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.data, 'Afiliate');
    }
    search() {
        this.globalService.httpServicesResponse({ 'value': this.value }, 'afiliate/getAfiliateValue').subscribe(
            data => {
                // tslint:disable-next-line:prefer-const
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
