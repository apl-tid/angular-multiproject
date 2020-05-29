import { Component, OnInit } from '@angular/core';
import { CommonService } from 'common';

@Component({
  selector: 'app-view2',
  templateUrl: './view2.component.html',
  styleUrls: ['./view2.component.scss']
})
export class View2Component implements OnInit {

  title = "App 2 - View 2";

  constructor(public commonService:CommonService) {}

  ngOnInit(): void {
  }

}
