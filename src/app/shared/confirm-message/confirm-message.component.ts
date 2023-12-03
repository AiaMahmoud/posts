import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/core/services/alertify.service';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
;

@Component({
  selector: 'app-confirm-message',
  templateUrl: './confirm-message.component.html',
  styleUrls: ['./confirm-message.component.scss']
})
export class ConfirmMessageComponent implements OnInit {
  // @Input ('message')Message:any;
  userObJ: any;

  constructor(private dialogRef: MatDialogRef<ConfirmMessageComponent>,
    private _dialog: MatDialog,
    private router: Router,
    private auth: AuthenticationService,
    private alertify: AlertifyService,

    @Inject(MAT_DIALOG_DATA) public data: any,

  ) { }

  ngOnInit(): void {

  }
  confirmed() {
    this.dialogRef.close('Confirmed');
  }
  closeModal() {
    this.dialogRef.close();
  }


}
