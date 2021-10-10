import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dzr-style-guide',
  templateUrl: './style-guide.component.html',
  styleUrls: ['./style-guide.component.scss'],
})
export class StyleGuideComponent implements OnInit {
  showItem = '';

  dropdown = [
    { index: '0', value: 'All' },
    { index: '1', value: 'Listed' },
    { index: '2', value: 'Approved' },
    { index: '3', value: 'Settled' },
    { index: '4', value: 'Offer' },
    { index: '5', value: 'Exchanged' },
    { index: '6', value: 'Warrenty' },
  ];

  itemsArray = [
    {
      id: 1,
      value: 'Automobiles',
    },
    {
      id: 2,
      value: 'Film & Animation',
    },
    {
      id: 3,
      value: 'Science & Technology',
    },
    {
      id: 4,
      value: 'Art',
    },
    {
      id: 5,
      value: 'Music',
    },
    {
      id: 6,
      value: 'Travel & Events',
    },
    {
      id: 7,
      value: 'Sports',
    },
    {
      id: 8,
      value: 'News & Politics',
    },
    {
      id: 9,
      value: 'Tutorials',
    },
  ] as any[];

  constructor() {}

  ngOnInit(): void {}

  log(event: any) {
    console.log(event);
  }

  show(item: string) {
    this.showItem = item;
  }
}
