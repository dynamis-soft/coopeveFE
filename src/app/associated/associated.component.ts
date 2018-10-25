import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';

@Component({
    selector: 'app-associated',
    templateUrl: './associated.component.html'
})
export class AssociatedComponent implements OnInit {

    data: any;
    value: any;
    closeResult: string;
    constructor(public globalService: GlobalService, private router: Router, private excelService: ExcelService) {

    }

    ngOnInit() {
        this.globalService.httpServicesResponse({}, 'associated/getassociatedAll').subscribe(
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
            '/associatededit', id
        ]);

    }
    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.data, 'Cliente');
    }
    search() {
        this.globalService.httpServicesResponse({ 'value': this.value }, 'associated/getAssociatedValue').subscribe(
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
