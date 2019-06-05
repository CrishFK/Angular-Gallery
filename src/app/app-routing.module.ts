import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: './pages/pages.module#PagesModule',
    runGuardsAndResolvers: 'always'
  },
  { path: '', redirectTo: 'pages/main', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/main' },
  { path: 'pages', redirectTo: 'pages/main' },
  { path: '404', redirectTo: 'pages/main' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
