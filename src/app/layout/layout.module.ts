import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { createTranslateLoader } from '../app.module';
import { FormlyModule } from '@ngx-formly/core';
import { ProductsRoutingModule } from '../modules/posts/products-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SharedModule } from '../shared/shared.module';
import { PaginationModule } from '../shared/pagination/pagination.module';
import { LoaderModule } from '../shared/loader/loader.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { TextBoxModule } from '../shared/form-builder/text-box/text-box.module';
import { DropdownModule } from '../shared/form-builder/dropdown/dropdown.module';
import { PasswordModule } from '../shared/form-builder/password/password.module';
import { DatepickerModule } from '../shared/form-builder/datepicker/datepicker.module';
import { DateTimePickerModule } from '../shared/form-builder/date-time-picker/date-time-picker.module';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({}),
    FormlyBootstrapModule,

    //materials
    //materials
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,

    NgSelectModule,
    NgbModule,
    SharedModule,
    PaginationModule,
    LoaderModule, NgxSkeletonLoaderModule,

    //from
    TextBoxModule,
    DropdownModule,
    PasswordModule,
    DatepickerModule,
    DateTimePickerModule,

    NgbModule,
    FormlyModule.forRoot({}),
    NgSelectModule,
    RouterModule,
    // translate
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),

  ],
  exports: [
    HeaderComponent
  ]
})
export class LayoutModule { }
