import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../../shared/shared.module'
import { AnimationsRoutingModule } from './animations-routing.module';
import { AnimationsComponent } from './animations.component';

@NgModule({
  declarations: [AnimationsComponent],
  imports: [
    CommonModule,
    SharedModule,
    AnimationsRoutingModule
  ]
})
export class AnimationsModule { }
