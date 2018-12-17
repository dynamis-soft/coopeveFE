import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';

@Component({
    selector: 'app-client',
    templateUrl: './client.component.html'
})
export class ClientComponent implements OnInit {

    data: any;
    value: any;
    closeResult: string;
    constructor(public globalService: GlobalService, private router: Router, private excelService: ExcelService) {

    }

    ngOnInit() {
        this.globalService.httpServicesResponse({}, 'clients/getClientsAll').subscribe(
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
            '/clientedit', id
        ]);

    }
    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.data, 'Cliente');
    }
    search() {
        this.globalService.httpServicesResponse({ 'value': this.value }, 'clients/getClientsValue').subscribe(
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
