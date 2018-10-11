import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coope';

  show = true;
  constructor() {
    let status = localStorage.getItem('status');
    console.log(status);
    if(status=='0'){
      this.show = false;
    }
  }

}
