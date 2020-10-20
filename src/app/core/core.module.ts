import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './router/core-routing.module';
import { throwIfAlreadyLoaded } from './utils/module-import.guard';

@NgModule({
  declarations: [CoreComponent, HeaderComponent],
  imports: [BrowserModule, CoreRoutingModule],
  exports: [CoreComponent],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
