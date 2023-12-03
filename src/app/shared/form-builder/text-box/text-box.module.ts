import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextBoxComponent } from './text-box/text-box.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    TextBoxComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule,
    MatFormFieldModule,
  ],
  exports: [
    TextBoxComponent,
    MatInputModule
  ]
})
export class TextBoxModule { }
