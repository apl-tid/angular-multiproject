import { Component, OnInit } from '@angular/core';
import { CommonService } from 'common';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  title = "App 1 - View 1";

  constructor(public commonService:CommonService) {}

  ngOnInit(): void {
  }

}
