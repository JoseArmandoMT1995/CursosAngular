import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'list', loadChildren: () => import('./pages/employees/list/list.module').then(m => m.ListModule) }, { path: 'new', loadChildren: () => import('./pages/employees/new/new.module').then(m => m.NewModule) }, { path: 'home', loadChildren: () => import('./pages/employees/home/home.module').then(m => m.HomeModule) }, { path: 'details', loadChildren: () => import('./pages/employees/details/details.module').then(m => m.DetailsModule) }, { path: 'edit', loadChildren: () => import('./pages/employees/edit/edit.module').then(m => m.EditModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }