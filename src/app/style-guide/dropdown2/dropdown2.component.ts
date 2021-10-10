import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dzr-dropdown2',
  templateUrl: './dropdown2.component.html',
  styleUrls: ['./dropdown2.component.scss'],
})
export class Dropdown2Component implements OnInit {
  show = false;

  @Input() textField = '';
  @Input() defaultPlaceHolder = '';
  @Input() itemsArray: any[] = [];

  selectedItem: any;

  ngOnInit(): void {
    if (!this.defaultPlaceHolder) {
      this.selectedItem = this.itemsArray[0];
    }
  }

  expandCollapse() {
    this.show = !this.show;
  }

  itemClicked(item: any) {
    this.defaultPlaceHolder = '';
    this.selectedItem = item;
    this.show = false;
  }
}
