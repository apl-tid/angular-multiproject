import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';
import { NavComponent } from './nav/nav.component';
import { MainRoutingModule } from './main-routing.module';
import { CommonModule } from '@common';
import { ExternalLibModule } from '@external-lib';

@NgModule({
  declarations: [
    AppComponent,
    View1Component,
    View2Component,
    NavComponent
  ],
  imports: [
    CommonModule,
    ExternalLibModule,
    MainRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class MainModule { }



