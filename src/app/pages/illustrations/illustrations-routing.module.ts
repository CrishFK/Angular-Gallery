import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IllustrationsComponent } from './illustrations.component';

const routes: Routes = [
  {
    path: '',
    component: IllustrationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IllustrationsRoutingModule { }
