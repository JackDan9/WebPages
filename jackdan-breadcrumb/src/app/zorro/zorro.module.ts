import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { ZORRO_COMMON_MODULE } from './zorro-common.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';


// #region your componets & directives
const COMPONENTS: Type<any>[] = [
  
];
const DIRECTIVES: Type<any>[] = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
  ]
})

export class ZorroModule { };