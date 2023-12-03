import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { SidebarService } from 'src/app/core/services/sidebar.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  title = 'Posts';
  constructor(
    public sideBarService: SidebarService,
    private translate: TranslateService,
    private router: Router) {
    if (this.router.url.length == 1 && this.router.url === '/'
      && localStorage.getItem('user') && localStorage.getItem('user') == 'user') { this.router.navigate(['/products']); }
    else if (localStorage.getItem('user') && localStorage.getItem('user') == 'admin') {
      this.router.navigate(['/']);
    }
  }
  ngOnInit() {
    let user = localStorage.getItem('user');
  }
}


