import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Models3dComponent } from './models3d.component';

const routes: Routes = [
  {
    path: '',
    component: Models3dComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Models3dRoutingModule { }
