import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ApiInterceptorProvider } from 'src/app/core/interceptors/api.interceptor';
import { LogOutComponent } from './components/log-out/log-out.component';
import { createTranslateLoader } from 'src/app/app.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    LoginComponent,
    LogOutComponent
  ],
  imports: [
    // NgxCaptchaModule,
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // NgxCaptchaModule,
    // NgxCaptchaModule,
    NgSelectModule,
    NgbModule,

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
    AuthenticationService,
    ApiInterceptorProvider
  ]

})
export class AuthModule {
}
