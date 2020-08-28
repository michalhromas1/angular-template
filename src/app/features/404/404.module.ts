import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { Error404Component } from './404.component';
import { Error404RoutingModule } from './router/404-routing.module';

@NgModule({
  declarations: [Error404Component],
  imports: [CommonModule, Error404RoutingModule],
})
export class Error404Module {}
