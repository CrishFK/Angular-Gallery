import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../../shared/shared.module'
import { AboutmeRoutingModule } from './aboutme-routing.module';
import { AboutmeComponent } from './aboutme.component';

@NgModule({
  declarations: [AboutmeComponent],
  imports: [
    CommonModule,
    SharedModule,
    AboutmeRoutingModule
  ]
})
export class AboutmeModule { }
