import { Component, EventEmitter, forwardRef, Input, OnInit, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TextBoxComponent),
      multi: true
    }
  ]
})
export class TextBoxComponent implements OnInit, ControlValueAccessor {

  @Input() isRequiredLabel: boolean = false;
  @Input() label: string = '';
  @Input() lang:any= localStorage.getItem('lang');
  @Input() pattern:any ='';
  @Input() disabled: boolean = false;
  @Input() placeholder: string = '';
  @Input() Value: string | undefined;
  @Input() appearance: string = 'fill';
  @Input() reset: boolean = true;
  @Input('maxL') maxL:any ='';
  @Input() summary: string = '';
  @Output() onStateChange = new EventEmitter();

  constructor(private translateService: TranslateService) {
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
    //console.log('maxL : ',this.maxL);
  }
  inputValueChange(e: any) {
    //console.log('HIIIIII .. ');
    if(this.lang === 'en'){

    }else {

    }
    this.Value = e.target.value;
    this.onChange(e.target.value);
  }
}
