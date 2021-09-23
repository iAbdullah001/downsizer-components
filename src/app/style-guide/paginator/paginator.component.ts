import { Component, Input, OnInit } from '@angular/core';

interface PagesArray {
  firstPage: number;
  afterFirstPage: number | '...';
  centerPages: number[];
  selectedPage: number;
  beforeLastPage: number | '...';
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
  private _allPages: number[] = [];
  private _maxShowCount = 7;

  pagesArray: PagesArray = {
    firstPage: 0,
    afterFirstPage: 0,
    centerPages: [],
    selectedPage: 0,
    beforeLastPage: 0,
    lastPage: 0,
  };

  get numberOfPages() {
    return this._numberOfPages;
  }

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
    this._allPages = Array.from(
      { length: this._numberOfPages },
      (_, i) => i + 1
    );

    if (this._numberOfPages < 1) {
      return;
    }
    this.setOnePage();
    if (this._numberOfPages <= 7) {
      this.setFirstSevenPages();
    } else {
      this.setMoreThenSevenPages();
    }
  }

  setOnePage() {
    this.pagesArray = {
      ...this.pagesArray,
      firstPage: 1,
      selectedPage: 1,
    };
  }

  setFirstSevenPages() {
    this.pagesArray = {
      ...this.pagesArray,
      centerPages: this._allPages.slice(1),
    };
  }

  setMoreThenSevenPages() {
    const midArray = this._allPages.slice(2, 5);
    this.pagesArray = {
      ...this.pagesArray,
      afterFirstPage: 2,
      centerPages: midArray,
      beforeLastPage: '...',
      lastPage: this._numberOfPages,
    };
  }

  pageClicked(page: number) {
    this.pagesArray = {
      ...this.pagesArray,
      selectedPage: page,
    };
  }
}
