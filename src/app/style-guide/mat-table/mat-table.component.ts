import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChildren,
} from '@angular/core';
import { Sort } from '@angular/material/sort';

interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Component({
  selector: 'dzr-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.scss'],
})
export class MatTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'email',
    'first_name',
    'last_name',
    'avatar',
  ];
  dataSource: User[] = [];

  pageSize = 6;
  length = 0;
  pageNumber = 1;
  pageSizeOptions = [5, 10, 15];

  sortActive: Sort = { active: 'name', direction: 'asc' };

  @ViewChildren('.mat-column-id') viewChildren!: any;

  dragSource: string[] = [];

  url = 'https://reqres.in/api/users';

  constructor(
    private http: HttpClient,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {}

  ngOnInit() {
    this.http
      .get(`${this.url}?page=${this.pageNumber}&per_page=${this.pageSize}`)
      .subscribe((res: any) => {
        this.dataSource = res.data;
        this.length = res.total;
      });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.displayedColumns,
      event.previousIndex,
      event.currentIndex
    );
  }

  pageEventChanged(event: any) {
    this.pageSize = event.pageSize;
    this.pageNumber = event.page;
    this.fetchData();
  }

  fetchData() {
    this.http
      .get(`${this.url}?page=${this.pageNumber}&per_page=${this.pageSize}`)
      .subscribe((res: any) => {
        this.dataSource = res.data;
      });
  }

  sortData(sort: Sort) {
    this.http
      .get(
        `${this.url}?page=${
          sort.direction === 'asc' ? this.pageNumber + 1 : this.pageNumber
        }&per_page=${this.pageSize}`
      )
      .subscribe((res: any) => {
        this.dataSource = res.data;
      });
  }

  getDragSource(column: string): string[] {
    let dragSource: string[] = [];
    switch (column) {
      case 'id':
        dragSource = this.dataSource.map((d) => d.id.toString());
        break;
      default:
        break;
    }
    return dragSource;
  }

  log(msg: string) {
    console.log(msg);
    console.log(this.viewChildren);
    console.log(document.getElementsByClassName('mat-column-id').length);
  }
}
