import { Component } from '@angular/core';

@Component({
  selector: 'dzr-ngx-paginator',
  templateUrl: './ngx-paginator.component.html',
  styleUrls: ['./ngx-paginator.component.scss'],
})
export class NgxPaginatorComponent {
  p: any;
  collection: string[] = [];
  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }
  }
}
