import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { MainComponent } from './main.component';
import { ProductsListModule } from '../posts/products.module';
import { PostsListComponent } from '../posts/posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: PostsListComponent }
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
  constructor() {

  }
}
