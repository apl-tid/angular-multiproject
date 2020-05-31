import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-common',
  template: `
    <p>Common lib component works!</p>
  `,
  styles: [
  ]
})
export class CommonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
