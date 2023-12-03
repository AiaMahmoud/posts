import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createTranslateLoader } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    DropdownComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    ReactiveFormsModule,
    TranslateModule,
    MatOptionModule,

    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  exports: [
    DropdownComponent,
    MatSelectModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DropdownModule { }
