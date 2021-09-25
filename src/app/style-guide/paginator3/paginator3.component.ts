import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

interface PageEvent {
  pageSize: number;
  page: number;
}

@Component({
  selector: 'dzr-paginator3',
  templateUrl: './paginator3.component.html',
  styleUrls: ['./paginator3.component.scss'],
})
export class Paginator3Component implements OnInit {
  @Input() set length(length: number) {
    if (!!length) {
      this._length = length;
    }
    if (!!this._pageSize && !!this._length) {
      this.setNumberOfPages();
    }
  }
  @Input() set pageSize(pageSize: number) {
    if (!!pageSize) {
      this._pageSize = pageSize;
    }
    if (!!this._pageSize && !!this._length) {
      this.setNumberOfPages();
    }
  }

  @Output() pageEvent = new EventEmitter<PageEvent>();

  private _length = 0;
  private _pageSize = 0;
  private _numberOfPages = 0;
  private _pageSlots = 7;
  private _forwardClick = true;
  pages: number[] = [];
  selectedPage = 1;

  private _pageEvent: PageEvent = {
    pageSize: this._pageSize,
    page: this.selectedPage,
  };

  @Input() perPageOptions: number[] = [];

  get numberOfPages() {
    return this._numberOfPages;
  }

  ngOnInit(): void {
    if (this._numberOfPages <= this._pageSlots) {
      this.pages = this.createArray();
    } else {
      const sliceArr = this.createArray().slice(0, 5);
      sliceArr.push(-2);
      sliceArr.push(this._numberOfPages);
      this.pages = sliceArr;
    }
  }

  changedPerPage(perPage: string) {
    this._pageEvent = { ...this._pageEvent, pageSize: +perPage };
    this.pageEvent.emit(this._pageEvent);
  }

  click(page: number) {
    this._forwardClick = page > this.selectedPage ? true : false;
    this.selectedPage = page;
    this._pageEvent = { ...this._pageEvent, page: this.selectedPage };
    this.pageEvent.emit(this._pageEvent);
    if (this._numberOfPages <= this._pageSlots) {
      return;
    }

    if (this._forwardClick) {
      this.handleForawardClick();
    }
    if (!this._forwardClick) {
      this.handleBackwardClick();
    }
  }

  prev() {
    this.click(this.selectedPage - 1);
  }
  next() {
    this.click(this.selectedPage + 1);
  }

  handleBackwardClick() {
    if (this.selectedPage === 1) {
      this.ngOnInit();
    }
    if (this.selectedPage >= 4 && this.selectedPage < this._numberOfPages - 3) {
      this.pages[2] = this.selectedPage - 1;
      this.pages[3] = this.selectedPage;
      this.pages[4] = this.selectedPage + 1;
      this.pages[5] = -2;
    }
    if (this.selectedPage === 4) {
      this.pages[1] = 2;
    }
  }

  handleForawardClick() {
    if (this.selectedPage === 4) {
      return;
    }
    if (
      this.selectedPage >= 5 &&
      this.selectedPage <= this._numberOfPages - 3
    ) {
      this.pages[1] = -1;
      this.pages[2] = this.selectedPage - 1;
      this.pages[3] = this.selectedPage;
      this.pages[4] = this.selectedPage + 1;
    }
    if (
      this.selectedPage >= this._numberOfPages - 3 &&
      this.selectedPage <= this._numberOfPages
    ) {
      this.pages[1] = -1;
      this.pages[2] = this._numberOfPages - 4;
      this.pages[3] = this._numberOfPages - 3;
      this.pages[4] = this._numberOfPages - 2;
      this.pages[5] = this._numberOfPages - 1;
    }
  }

  createArray(): number[] {
    return Array.from({ length: this._numberOfPages }, (_, i) => i + 1);
  }

  setNumberOfPages() {
    this._pageEvent = { ...this._pageEvent, pageSize: this._pageSize };
    const remainder = this._length % this._pageSize !== 0;
    const integer = parseInt(
      (this._length / this._pageSize).toString().split('.')[0]
    );
    this._numberOfPages = remainder ? integer + 1 : integer;
    this.ngOnInit();
  }
}
