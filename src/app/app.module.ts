import { NgModule } from '@angular/core';
import { CoreComponent } from './core/core.component';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [CoreModule],
  bootstrap: [CoreComponent],
})
export class AppModule {}
