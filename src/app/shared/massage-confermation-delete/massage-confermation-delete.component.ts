import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-massage-confermation-delete',
  templateUrl: './massage-confermation-delete.component.html',
  styleUrls: ['./massage-confermation-delete.component.scss']
})
export class MassageConfermationDeleteComponent implements OnInit {

  state = false;
  message!: string;
  constructor(
    private dialogRef: MatDialogRef<MassageConfermationDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.message = this.data.message;
    this.state = this.data.state;


  }

  closeModal() {
    this.dialogRef.close(this.state);
  }
  onSubmit() {
    this.dialogRef.close(true);
  }
}
