import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ChangeLanguageService } from 'src/app/core/services/change-language.service';
import { NegotiateSignalRService } from 'src/app/core/services/negotiate-signalR.service';
import { SidebarService } from 'src/app/core/services/sidebar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  show: string = 'inActive'
  userPrivilege: any = '';
  constructor(
    public languageService: ChangeLanguageService,
    public translate: TranslateService,
    public sideBarService: SidebarService,
    public NegotiateSignalRService: NegotiateSignalRService,
    private auth: AuthenticationService

  ) {

    this.userData = localStorage.getItem('user');
    if (this.userData) {
      this.userPrivilege = this.userData
    }
  }

  imgSource: any;

  userData: any;
  userFullData: any;
  ngOnInit() {
    // this.changeLanguage();
  }


  userLogOut() {
    this.auth.logOutCallHandling();
  }

  changeLanguage() {
    if (localStorage.getItem('lang') == 'ar') {
      this.translate.use('en')
      localStorage.setItem('lang', 'en')
    }
    else {
      this.translate.use('ar')
      localStorage.setItem('lang', 'ar')
    }

    document.querySelector('body')!.setAttribute('dir', localStorage.getItem('lang') == 'ar' ? 'rtl' : 'ltr');
    document.querySelector('html')!.setAttribute('lang', localStorage.getItem('lang') == 'ar' ? 'ar' : 'en');
    window.location.reload();
  }
}

