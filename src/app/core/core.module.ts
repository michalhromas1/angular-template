import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './router/core-routing.module';

@NgModule({
  declarations: [CoreComponent, HeaderComponent],
  imports: [BrowserModule, CoreRoutingModule],
  bootstrap: [CoreComponent],
})
export class CoreModule {}
