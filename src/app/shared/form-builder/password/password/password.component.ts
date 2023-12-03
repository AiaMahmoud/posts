import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordComponent),
      multi: true
    }
  ]
})
export class PasswordComponent implements OnInit, ControlValueAccessor {

  @Input() isRequiredLabel: boolean = false;
  @Input() label: string = '';
  @Input() rePassword:boolean = false;
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() Value: string | undefined;
  @Input() appearance: string = 'fill';
  @Input() reset: boolean = true;
  @Input() summary: string = '';
  @Output() onStateChange = new EventEmitter();
  hide = true;

  constructor(translate: TranslateService) {
  }

  onChange(e: any) {
    this.Value = e;
  }
  onTouched() {
    this.onStateChange.emit();
  }

  writeValue(obj: string): void {
    if (obj != null) {
      this.Value = obj ? obj : "";
    } else {
      this.Value = undefined;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }
  ngOnInit(): void {
  }
  passValueChange(e: any) {
    this.Value = e.target.value;
    this.onChange(e.target.value);
  }
}
