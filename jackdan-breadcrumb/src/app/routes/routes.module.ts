import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
// import { BreadcrumbBasicComponent } from '../components/breadcrumb/basic/breadcrumb-basic.component';
import { BreadcrumbComponent } from '../components/breadcrumb/breadcrumb.component';
import { CardBasicComponent } from '../components/card/basic/card-basic.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'breadcrumb',
    pathMatch: 'full'
  },
  {
    path: 'breadcrumb',
    component: BreadcrumbComponent,
    loadChildren:
      () => import('../components/breadcrumb/breadcrumb.module').then(m => m.BreadcrumbModule),
    data: {
      title: 'breadcrumb basic'
    }
  },
  {
    path: 'card-basic',
    component: CardBasicComponent,
    data: {
      title: 'card basic'
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
