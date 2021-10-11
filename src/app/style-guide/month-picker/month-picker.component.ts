import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dzr-month-picker',
  templateUrl: './month-picker.component.html',
  styleUrls: ['./month-picker.component.scss'],
  providers: [DatePipe],
})
export class MonthPickerComponent implements OnInit {
  today = new Date();
  thisYear = this.today.getFullYear();
  thisMonth = this.today.getMonth();
  yearArrayStart = this.thisYear - 100;

  years = Array.from(Array(201).keys()).map((i) => this.yearArrayStart + i);

  selectedYear = this.thisYear;
  selectedMonth = this.thisMonth;

  dateText = '';

  @Output() inputText = new EventEmitter<string>();
  @Output() monthYear = new EventEmitter<string | null>();

  value: string | null = '';

  months = [
    {
      index: 0,
      shortName: 'Jan',
      longName: 'January',
    },
    {
      index: 1,
      shortName: 'Feb',
      longName: 'February',
    },
    {
      index: 2,
      shortName: 'Mar',
      longName: 'March',
    },
    {
      index: 3,
      shortName: 'Apr',
      longName: 'April',
    },
    {
      index: 4,
      shortName: 'May',
      longName: 'May',
    },
    {
      index: 5,
      shortName: 'Jun',
      longName: 'June',
    },
    {
      index: 6,
      shortName: 'Jul',
      longName: 'July',
    },
    {
      index: 7,
      shortName: 'Aug',
      longName: 'August',
    },
    {
      index: 8,
      shortName: 'Sep',
      longName: 'September',
    },
    {
      index: 9,
      shortName: 'Oct',
      longName: 'October',
    },
    {
      index: 10,
      shortName: 'Nov',
      longName: 'November',
    },
    {
      index: 11,
      shortName: 'Dec',
      longName: 'December',
    },
  ];

  constructor(private datePipe: DatePipe) {}

  ngOnInit(): void {}

  setDateText() {
    this.dateText = `${this.months[this.selectedMonth].longName}, ${
      this.selectedYear
    }`;
    this.value = this.datePipe.transform(this.dateText, 'yyyy-MM');
    this.inputText.emit(this.dateText);
    this.monthYear.emit(this.value);
  }
}
