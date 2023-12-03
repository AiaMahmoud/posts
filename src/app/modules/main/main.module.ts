import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { LoaderModule } from 'src/app/shared/loader/loader.module';
import { NgxSkeletonLoaderModule, } from 'ngx-skeleton-loader';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home/home.component';
import { createTranslateLoader } from 'src/app/app.module';
import { ApiInterceptorProvider } from 'src/app/core/interceptors/api.interceptor';
import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule,
    NgSelectModule,
    LoaderModule, 
     NgxSkeletonLoaderModule,
    ChartModule,
    ChartsModule,
    //modules
    LayoutModule,
    CoreModule,
    SharedModule,

  // tranlation
  TranslateModule.forChild({
    loader: {
      provide: TranslateLoader,
      useFactory: createTranslateLoader,
      deps: [HttpClient],
    },
  }),

  ],
  providers: [
    ApiInterceptorProvider,
  ],
})
export class MainModule { }
