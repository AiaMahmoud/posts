import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownmilltyselectComponent } from './dropdownmilltyselect/dropdownmilltyselect.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatOptionModule } from '@angular/material/core';



@NgModule({
  declarations: [
    DropdownmilltyselectComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule,
    MatOptionModule
  ], exports: [
    DropdownmilltyselectComponent,
    MatSelectModule
  ],
})
export class DropdownmiltyselectModule { }
