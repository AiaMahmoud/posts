import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateTimePickerComponent } from './date-time-picker/date-time-picker.component';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    DateTimePickerComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    TranslateModule,
    MatDatepickerModule,
    NgbTimepickerModule

  ],
  exports: [
    DateTimePickerComponent,
    MatInputModule,
  ]
})
export class DateTimePickerModule { }
