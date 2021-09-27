import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dzr-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss'],
})
export class StyleGuideComponent implements OnInit {
  dropdown = [
    { index: '0', value: 'All' },
    { index: '1', value: 'Listed' },
    { index: '2', value: 'Approved' },
    { index: '3', value: 'Settled' },
    { index: '4', value: 'Offer' },
    { index: '5', value: 'Exchanged' },
    { index: '6', value: 'Warrenty' },
  ];

  constructor() {}

  ngOnInit(): void {}

  log(event: any) {
    console.log(event);
  }
}
