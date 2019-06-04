import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IllustrationsRoutingModule } from './illustrations-routing.module';
import { IllustrationsComponent } from './illustrations.component';

@NgModule({
  declarations: [IllustrationsComponent],
  imports: [
    CommonModule,
    IllustrationsRoutingModule
  ]
})
export class IllustrationsModule { }
