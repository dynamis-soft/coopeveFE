import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

     constructor(public location: Location) {}

    ngOnInit() {
    }

    isMap(path) {
      // tslint:disable-next-line:no-var-keyword
      var titlee = this.location.prepareExternalUrl(this.location.path());
      titlee = titlee.slice( 1 );
      // tslint:disable-next-line:triple-equals
      if (path == titlee) {
        return false;
      }
      // tslint:disable-next-line:one-line
      else {
        return true;
      }
    }
}
