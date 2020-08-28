import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './router/home-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
