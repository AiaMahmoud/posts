import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes =
  [
    {
      path: '',
      loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule), canActivate: [AuthGuard],
    },
    {
      path: 'auth',
      loadChildren: () => import('../app/modules/auth/auth.module').then(m => m.AuthModule)
      , outlet: 'primary'
    },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
