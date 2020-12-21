import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

import { BreadcrumbBasicComponent } from '../breadcrumb/basic/breadcrumb-basic.component'
import { BreadcrumbRoutingModule } from './breadcrumb-routing.module';

@NgModule({
  imports: [SharedModule, BreadcrumbRoutingModule],
  declarations: [
    BreadcrumbBasicComponent,
  ]
})

export class BreadcrumbModule {}