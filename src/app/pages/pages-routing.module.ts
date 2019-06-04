import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'aboutme',
        loadChildren:  './aboutme/aboutme.module#AboutmeModule'
      },
      {
        path: 'animations',
        loadChildren:  './animations/animations.module#AnimationsModule'
      },
      {
        path: 'contact',
        loadChildren:  './contact/contact.module#ContactModule'
      },
      {
        path: 'illustrations',
        loadChildren:  './illustrations/illustrations.module#IllustrationsModule'
      },
      {
        path: 'main',
        loadChildren:  './main/main.module#MainModule'
      },
      {
        path: 'models3d',
        loadChildren:  './models3d/models3d.module#Models3dModule'
      },
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      }, 
     ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

