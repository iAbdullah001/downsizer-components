import { Component } from '@angular/core';

@Component({
  selector: 'dzr-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  today = new Date();

  day = this.today.getDate();
  month = this.today.getMonth();
  year = this.today.getFullYear();

  months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}
