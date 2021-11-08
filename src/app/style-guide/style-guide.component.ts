import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DROPDOWN_ITEMS } from './test-data/dropdown';
import { ITEMS } from './test-data/dropdown2';

@Component({
  selector: 'dzr-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss'],
  providers: [DatePipe],
})
export class StyleGuideComponent implements OnInit {
  showItem = '';

  date: any;

  // Dropdown items
  dropdownItems = DROPDOWN_ITEMS;

  // Dropdown2 items
  itemsArray = ITEMS;

  // Custom form control
  customFormGroup: FormGroup;

  constructor(private datePipe: DatePipe, private fb: FormBuilder) {
    this.customFormGroup = this.fb.group({
      customInput: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmitForm() {
    if (this.customFormGroup.invalid) {
      alert('invalid');
    } else {
      alert('valid');
    }
  }

  get f() {
    return this.customFormGroup.controls;
  }

  ngOnInit(): void {}

  log(event: any) {
    console.log(event);
  }

  show(item: string) {
    this.showItem = item;
  }

  openDatePicker(dp: any) {
    dp.open();
  }

  closeDatePicker(eventData: Date, dp?: any) {
    this.date = this.datePipe.transform(eventData, 'MMMM, yyyy');
    console.log(this.date);
    // get month and year from eventData and close datepicker, thus not allowing user to select date
    dp.close();
  }
}
