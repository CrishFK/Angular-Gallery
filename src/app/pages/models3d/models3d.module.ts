import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../../shared/shared.module'
import { Models3dRoutingModule } from './models3d-routing.module';
import { Models3dComponent } from './models3d.component';


@NgModule({
  declarations: [Models3dComponent],
  imports: [
    CommonModule,
    SharedModule,
    Models3dRoutingModule
  ]
})
export class Models3dModule { }
