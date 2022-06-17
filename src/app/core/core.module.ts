import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HeaderLayoutComponent } from './layouts/main-layout/components/header-layout/header-layout.component';



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
  ]
})
export class CoreModule { }
