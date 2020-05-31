import { Component } from '@angular/core';
import { CommonService } from '@common';
import { ExternalLibService } from '@external-lib';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Main';

  constructor(public commonService:CommonService, public externalLibService:ExternalLibService) {}
  callServices() {
    this.commonService.message = 'Common lib service called from ' + this.title;
    this.externalLibService.message = 'External lib service called from ' + this.title;
  }
}
