import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MassageConfermationComponent } from './massage-confermation/massage-confermation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MainRoutingModule } from '../modules/main/main-routing.module';
import { MassageConfermationDeleteComponent } from './massage-confermation-delete/massage-confermation-delete.component';
import { BasicTabelComponent } from './basic-tabel/basic-tabel.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ConfirmMessageComponent } from './confirm-message/confirm-message.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MassageConfermationComponent,
    MassageConfermationDeleteComponent,
    BasicTabelComponent,
    ConfirmMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgbModule,
    MatSlideToggleModule,
    MatIconModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),

  ],
  exports:[
    MassageConfermationComponent,
    MassageConfermationDeleteComponent,
    BasicTabelComponent,
    MatIconModule
  ]
})
export class SharedModule { }
