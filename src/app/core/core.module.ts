import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { throwIfAlreadyLoaded } from './utils/module-import.guard';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [RouterModule],
  providers: [],
  bootstrap: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
