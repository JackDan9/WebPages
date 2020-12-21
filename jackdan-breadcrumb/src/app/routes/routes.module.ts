import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { BreadcrumbBasicComponent } from '../components/breadcrumb/basic/breadcrumb-basic.component';
import { CardBasicComponent } from '../components/card/basic/card-basic.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'breadcrumb-basic',
    pathMatch: 'full'
  },
  {
    path: 'breadcrumb-basic',
    component: BreadcrumbBasicComponent,
    data: {
      title: ''
    }
  },
  {
    path: 'card-basic',
    component: CardBasicComponent,
    data: {
      title: ''
    }
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: environment.useHash
  })],
  exports: [RouterModule],
})
export class RoutesModule {}
