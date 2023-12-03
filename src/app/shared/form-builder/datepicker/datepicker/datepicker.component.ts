import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DatepickerComponent),
      multi: true
    }
  ]
})
export class DatepickerComponent implements OnInit, ControlValueAccessor {

  @Input() isRequiredLabel: boolean = false;
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() appearance: string = 'fill';
  @Input() required: boolean = false;
  @Input() summary: string = '';
  @Input() readonly: boolean = false;
  @Output() valueEmitter = new EventEmitter();
  @Input() minDate = null;
  @Input() maxDate = null;
  @Input() value: Date | undefined;
  @Input() filter: any;
  hide = true;
  constructor(translate: TranslateService, private dateAdapter: DateAdapter<any>) {
  }

  onChange(e: any) {
    this.value = e;
  }
  onTouched() {
    this.valueEmitter.emit(this.value);
  }
  writeValue(obj: Date): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  dateValueChanged(e: any): void {
    this.value = e.target.value;
    this.onChange(this.value);
    this.valueEmitter.emit(this.value);
  }


  ngOnInit(): void {
    const lang = localStorage.getItem("lang")
    if (lang === "ar") {
      this.dateAdapter.setLocale('ar-AE');
    } else if (lang === "en") {
      this.dateAdapter.setLocale('en-GB');
    }
  }
}
