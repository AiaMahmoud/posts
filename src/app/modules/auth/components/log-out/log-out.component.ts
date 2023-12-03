import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/core/services/alertify.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
;

@Component({
  selector: 'app-log-out',
  templateUrl: './log-out.component.html',
  styleUrls: ['./log-out.component.scss']
})
export class LogOutComponent implements OnInit {

  userObJ: any;

  constructor(private dialogRef: MatDialogRef<LogOutComponent>,
    private router: Router,
    private auth: AuthenticationService,


    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(): void {
   const dataInfo: any = localStorage.getItem('userData')
    this.userObJ = JSON.parse(dataInfo)
  }
  logout() {
    this.auth.logOutCallHandling();
  }
  closeModal() {
    this.dialogRef.close();
  }


}
