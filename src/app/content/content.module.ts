import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MaterialModule}from '../material/material.module'
import{FormsModule}from '@angular/forms'

@NgModule({
  declarations: [
    ItemsComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports:[
    ItemsComponent,
    NavbarComponent
  ]
})
export class ContentModule { }
