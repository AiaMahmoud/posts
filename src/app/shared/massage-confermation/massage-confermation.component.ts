import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-massage-confermation',
  templateUrl: './massage-confermation.component.html',
  styleUrls: ['./massage-confermation.component.scss']
})
export class MassageConfermationComponent implements OnInit {

  state = false;
  message!: string;
  type!: string
  constructor(
    private dialogRef: MatDialogRef<MassageConfermationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.message = this.data.message;
    this.state = this.data.state;
    this.type = this.data.type
  }

  closeModal() {
    this.dialogRef.close(this.state);
  }
  onSubmit() {
    this.dialogRef.close(true);
  }
}
