import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, PatternValidator, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/core/services/alertify.service';
import { TranslateService } from '@ngx-translate/core';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthenticationService,
    private router: Router,
    private alertify: AlertifyService,
    public languageService: ChangeLanguageService,
    public translate: TranslateService,
  ) {
  }
  lang: any
  FormLogin = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });


  ngOnInit(): void { }
  onSubmit() {
    this.loading = true;
    const loginParam: any = {
      ...this.FormLogin.value
    };
    if (this.FormLogin.valid) {
      this.auth.login(loginParam).subscribe((response: any) => {
        if (response) {
          this.router.navigate(['/']);

          this.alertify.success(this.translate.instant('AUTH.LoginSuccessfully'));
        } else {
          this.loading = false;
          this.alertify.error(this.translate.instant('AUTH.LoginFailed'));
        }
      }, () => {
        this.loading = false;
        this.alertify.error(this.translate.instant('AUTH.LoginFailed'));
      });
    } else {
      this.loading = false;
    }
  }
  loading: boolean = false;


  changeLanguage() {
    if (localStorage.getItem('lang') == 'ar') {
      this.translate.use('en')
      localStorage.setItem('lang', 'en')
    }
    else if (localStorage.getItem('lang') == 'en') {
      this.translate.use('ar')
      localStorage.setItem('lang', 'ar')
    }
    document.querySelector('body')!.setAttribute('dir', localStorage.getItem('lang') == 'ar' ? 'rtl' : 'ltr');
    document.querySelector('html')!.setAttribute('lang', localStorage.getItem('lang') == 'ar' ? 'ar' : 'en');
    window.location.reload();
  }
}
