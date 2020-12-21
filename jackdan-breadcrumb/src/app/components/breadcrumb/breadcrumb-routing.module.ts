import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreadcrumbBasicComponent } from '../breadcrumb/basic/breadcrumb-basic.component'

const routes: Routes = [
  {
    path: 'basic',
    component: BreadcrumbBasicComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BreadcrumbRoutingModule { }