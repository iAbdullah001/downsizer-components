import { Component, ExistingProvider, forwardRef } from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  Validator,
  Validators,
} from '@angular/forms';

export const EDIT_ADDRESS_CONTROL_VALUE_ACCESSOR: ExistingProvider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => CustomFormControlComponent),
  multi: true,
};

@Component({
  selector: 'dzr-custom-form-control',
  templateUrl: './custom-form-control.component.html',
  styleUrls: ['./custom-form-control.component.scss'],
  providers: [
    EDIT_ADDRESS_CONTROL_VALUE_ACCESSOR,
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: forwardRef(() => CustomFormControlComponent),
    },
  ],
})
export class CustomFormControlComponent
  implements ControlValueAccessor, Validator
{
  private onTouchedCallback = () => {};
  private onChangeCallback = (val: number) => {};

  onBlur() {
    this.onTouchedCallback();
  }

  public formControl = new FormControl();

  constructor() {
    this.formControl.valueChanges.subscribe((val) => {
      this.onChangeCallback(val);
    });
  }

  writeValue(value: number) {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  validate(control: AbstractControl): null | Validators {
    return {};
  }

  change(val: any) {}
}
