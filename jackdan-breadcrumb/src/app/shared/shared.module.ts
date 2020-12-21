import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { IconsProviderModule } from '../icons-provider.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    DragDropModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    DragDropModule,
  ]

})
export class SharedModule { }
