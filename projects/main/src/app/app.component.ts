import { Component } from '@angular/core';
import { CommonService } from 'common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Main';
  constructor(public commonService:CommonService) {}
}
