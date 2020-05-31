import { Component, OnInit } from '@angular/core';
import { CommonService } from '@common';
import { ExternalLibService } from '@external-lib';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  title = "App 2 - View 1";

  constructor(public commonService:CommonService, public externalLibService:ExternalLibService) {}
  ngOnInit(): void {}
  callServices() {
    this.commonService.message = 'Common lib service called from ' + this.title;
    this.externalLibService.message = 'External lib service called from ' + this.title;
  }  

}
