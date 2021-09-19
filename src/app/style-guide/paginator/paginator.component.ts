import { Component, Input, OnInit } from '@angular/core';

interface PagesArray {
  startEllipsis: boolean;
  showingPages: number[];
  endEllipsis: boolean;
  lastPage: number;
}

@Component({
  selector: 'dzr-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent implements OnInit {
  private _length = 0;
  private _pageSize = 0;
  private _numberOfPages = 0;
  private _pagesArray: PagesArray = {
    startEllipsis: false,
    showingPages: [],
    endEllipsis: false,
    lastPage: 0,
  };

  @Input() set length(length: number) {
    this._length = length;
  }

  @Input() set pageSize(size: number) {
    this._pageSize = size;
    const remaining = this._length % size !== 0;
    const fullPages = Math.round(this._length / size);
    this._numberOfPages = remaining ? fullPages + 1 : fullPages;
  }

  ngOnInit(): void {
    const allPages = Array.from(
      { length: this._numberOfPages },
      (_, i) => i + 1
    );
  }

  display() {
    return {
      length: this._length,
      pageSize: this._pageSize,
      numberOfPages: this._numberOfPages,
      pagesArray: this._pagesArray,
    };
  }
}
