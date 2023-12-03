import { PostFormComponent } from './post-form/post-form.component';
import { PostCardComponent } from './post-card/post-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { PostsListComponent } from './posts-list/posts-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { NgxSkeletonLoaderModule, } from 'ngx-skeleton-loader';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule } from 'src/app/shared/pagination/pagination.module';
import { TextBoxModule } from 'src/app/shared/form-builder/text-box/text-box.module';
import { DropdownModule } from 'src/app/shared/form-builder/dropdown/dropdown.module';
import { PasswordModule } from 'src/app/shared/form-builder/password/password.module';
import { DatepickerModule } from 'src/app/shared/form-builder/datepicker/datepicker.module';
import { DateTimePickerModule } from 'src/app/shared/form-builder/date-time-picker/date-time-picker.module';
import { createTranslateLoader } from 'src/app/app.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { MatTabsModule } from '@angular/material/tabs';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatTableModule } from '@angular/material/table';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    PostFormComponent,
    PostsListComponent,
    PostCardComponent,

  ],
  imports: [
    MatTableModule,
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({}),
    FormlyBootstrapModule,
    NgxDropzoneModule,
    //materials
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,

    NgSelectModule,
    NgbModule,
    FormsModule,

    ReactiveFormsModule,

    SharedModule,
    PaginationModule,
    LoaderModule,
    NgxSkeletonLoaderModule,

    //from
    TextBoxModule,
    DropdownModule,
    PasswordModule,
    DatepickerModule,
    DateTimePickerModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

  ]
})
export class ProductsListModule { }
