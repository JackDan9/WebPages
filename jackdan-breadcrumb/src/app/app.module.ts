import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import zh from '@angular/common/locales/zh';

import { ZorroModule } from './zorro/zorro.module';
import { RoutesModule } from './routes/routes.module';
import { BreadcrumbBasicComponent } from './components/breadcrumb/basic/breadcrumb-basic.component'
import { CardBasicComponent } from './components/card/basic/card-basic.component';

// registerLocaleData(en);
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbBasicComponent,
    CardBasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutesModule,
    ZorroModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule { }
