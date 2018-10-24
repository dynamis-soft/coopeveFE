import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';


@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {

    data: any;
    closeResult: string;
    constructor(public globalService: GlobalService, private router: Router, private excelService: ExcelService) {

    }

    ngOnInit() {
        this.globalService.httpServicesResponse({}, 'contact/getContactAll').subscribe(
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
            '/contactedit', id
        ]);

    }
    exportAsXLSX(): void {
        this.excelService.exportAsExcelFile(this.data, 'Cliente');
    }

}
