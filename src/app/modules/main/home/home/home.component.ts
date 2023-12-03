import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/core/services/authentication.service';


;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showAdminDashboard: boolean = false;
  showBranchDashboard: boolean = false;
  showOrganizationDashboard: boolean = false;
  showBranchSecurityDashboard: boolean = false;


  constructor(
    private _dialog: MatDialog,
    private AuthenticationService :AuthenticationService) {
    
   }

  ngOnInit() {

  }

}
