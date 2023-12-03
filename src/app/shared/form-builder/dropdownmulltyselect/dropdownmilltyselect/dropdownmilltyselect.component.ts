import { Component, EventEmitter, forwardRef, Input, OnInit, Output, VERSION, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dropdownmilltyselect',
  templateUrl: './dropdownmilltyselect.component.html',
  styleUrls: ['./dropdownmilltyselect.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownmilltyselectComponent),
      multi: true
    }
  ]
})
export class DropdownmilltyselectComponent implements OnInit, ControlValueAccessor {

  constructor(translte: TranslateService) {
  }
  @Input() options: any;
  @Input() label: string = '';
  @Input() selectedValue?: string;
  @Input() isRequiredLabel: boolean = false;
  @Input() appearance: string = "fill";
  @Input() multiple: boolean = true;
  @Input() Value: string | undefined;
  @Input() placeholder: string = "";
  // @Input() multiValue:[];
  @Input() disabled: boolean = false;
  @Input() summary: string = '';
  @Output() valueSelected = new EventEmitter();;
  @ViewChild(MatSelect) matSelect!: MatSelect;
  @Output() selectionChange: EventEmitter<MatSelectChange> = new EventEmitter<MatSelectChange>();
  @Output() valueChange: EventEmitter<any> = new EventEmitter<any>();
  version = VERSION;
  selectListControl = new FormControl('');

  onChange: any = () => { };
  onTouched: any = () => { };

  selectionChanged(event: MatSelectChange) {
    this.selectionChange.emit(new MatSelectChange(this.matSelect, event.value));
    this.valueChange.emit(event.value);

    this.onChange(event.value);
    this.onTouched();

  }


  writeValue(obj: any): void {
    this.selectListControl.setValue(obj ? obj.toString() : "");
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.selectListControl.valueChanges.subscribe(fn)
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
  }
  ngOnInit(): void {
  }

}
