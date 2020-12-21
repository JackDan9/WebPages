import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZORRO_COMMON_MODULE } from './zorro-common.module';


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
    ZORRO_COMMON_MODULE
  ],
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    ...ZORRO_COMMON_MODULE,
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})

export class ZorroModule { };