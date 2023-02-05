import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UsersRoutingModule } from '@app/users/users-routing.module';
import { LayoutComponent } from '@app/users/layout.component';
import { ListComponent } from '@app/users/list.component';
import { AddEditComponent } from '@app/users/add-edit.component';

@NgModule({
  declarations: [
    LayoutComponent,
    ListComponent,
    AddEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }