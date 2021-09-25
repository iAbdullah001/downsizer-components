import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dzr-table-footer',
  templateUrl: './table-footer.component.html',
  styleUrls: ['./table-footer.component.scss'],
})
export class TableFooterComponent {
  @Input() length = 0;
  @Input() pageSize = 0;
  @Input() pageSizeOptions = [10, 20, 30];

  @Output() pageEvent = new EventEmitter();
}
