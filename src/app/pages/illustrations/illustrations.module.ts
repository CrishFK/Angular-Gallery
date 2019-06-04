import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../../shared/shared.module'
import { IllustrationsRoutingModule } from './illustrations-routing.module';
import { IllustrationsComponent } from './illustrations.component';

@NgModule({
  declarations: [IllustrationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    IllustrationsRoutingModule
  ]
})
export class IllustrationsModule { }
