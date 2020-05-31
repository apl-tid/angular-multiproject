import { Component, OnInit } from '@angular/core';
import { CommonService } from '@common';
import { ExternalLibService } from '@external-lib';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit {

  title = "App 1 - View 2";

  constructor(public commonService:CommonService, public externalLibService:ExternalLibService) {}
  ngOnInit(): void {}
  callServices() {
    this.commonService.message = 'Common lib service called from ' + this.title;
    this.externalLibService.message = 'External lib service called from ' + this.title;
  }  

}
