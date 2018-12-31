import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../shared/services/global.service';
import { Router } from '@angular/router';
import { ExcelService } from '../shared/services/excel.service';
import { PagerService } from '../shared/services/pager.service';

@Component({
    selector: 'app-possibleclient',
    templateUrl: './possibleclient.component.html'
})
export class PossibleclientComponent implements OnInit {

    data: any;
    closeResult: string;
    value: any;

    currentPage = 50;
    page: number = 1;
    to = 1;
    from = 50;
    length = 0;
    custom = 0;
    pager: any = {};
    pagedItems: any[];


    constructor(public globalService: GlobalService, private router: Router, private excelService: ExcelService, private pagerService: PagerService) {

    }

    ngOnInit() {
        this.getAll();
    }


    getAll() {
        this.globalService.httpServicesResponse({ "to": this.to, "from": this.from }, 'client/getClientAll').subscribe(
            data => {
                // tslint:disable-next-line:prefer-const
                let result: any = data;
                // tslint:disable-next-line:triple-equals
                if (result.status == '99') {
                    alert(result.message);
                } else {
                    this.data = result.data;
                    this.length = this.data.cantidad;
                    this.pager = this.pagerService.getPager(this.length, this.page);
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
        this.excelService.exportAsExcelFile(this.data, 'possibleclient');
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
    setPage(page: number) {
        // get pager object from service
        this.page = page;
        this.pager = this.pagerService.getPager(this.length, page);
        this.to = page * this.currentPage;
        this.from = this.to + this.currentPage;
        this.getAll();
    }

}
