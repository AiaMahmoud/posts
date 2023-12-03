import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { NgxSkeletonLoaderModule, } from 'ngx-skeleton-loader';



@NgModule({
  declarations: [
    LoaderComponent
  ],
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule,
  ],
  exports: [
    LoaderComponent,
  ]
})
export class LoaderModule { }
