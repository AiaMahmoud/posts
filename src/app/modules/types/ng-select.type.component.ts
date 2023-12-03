// import { Component } from '@angular/core';
// import { FieldType, FormlyFormOptions } from '@ngx-formly/core';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';


// @Component({
//     selector: 'formly-field-ng-select',
//     template: ` 
//     <ng-select class="form-control"
//     [multiple]="true"
//     [placeholder]="field.templateOptions!.placeholder!"
//     [items]="field.templateOptions?.options!"
//     [(ngModel)]="field.key"
//     >
//     </ng-select>`
//     ,
//     styleUrls: ['ng-select.css']
// })
// export class FormlyFieldNgSelect extends FieldType {
// }
import { FieldType } from '@ngx-formly/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';

@Component({
  selector: 'app-formly-multi-select-filed',
  template: `
  <div class="form-group">
  <ng-select [closeOnSelect]="false" class="form-control" 
  style="border:0px !important;  box-shadow: 0px 0px 0px rgb(0 0 0)!important;" [readonly]="to.readonly" appearance="outline" [placeholder]="to.placeholder" (clear)="clear()" (remove)="remove()" (add)="add($event)"
  [markFirst]="true" [virtualScroll]="true"  multiple="true"
  [formControl]="formControl" [formlyAttributes]="field">
  <ng-option *ngFor="let item of field.templateOptions?.options" [value]="item.value">
  {{item.label}}
  </ng-option>
  </ng-select>
</div>
  `
//   <small style="padding: 0 1em;margin-top: 0.6666666667em;" class="text-danger" *ngIf="formControl.getError('required') && formControl.touched">{{'messages.required' |translate}}</small>

})
export class FormlyFieldNgSelect extends FieldType {
  remove(){
    if(this.to.remove){
      this.to.remove()
    }
  }
  clear(){
    if(this.to.clear){
      this.to.clear()
    }
  }
  add(e:any){
    if(this.to.add){
      this.to.add(e)
    }
  }
}
