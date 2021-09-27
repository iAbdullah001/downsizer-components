import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface DzrDropdownItem {
  index: string;
  value: string;
}

@Component({
  selector: 'dzr-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent implements OnInit {
  selectedItem: DzrDropdownItem = { index: '0', value: '' };
  @Input() dropDownItems: DzrDropdownItem[] = [];

  @Output() change = new EventEmitter<DzrDropdownItem>();

  ngOnInit(): void {
    this.selectedItem = this.dropDownItems[0];
  }

  menuItemClicked(item: DzrDropdownItem) {
    this.selectedItem = item;
    this.change.emit(item);
  }
}
