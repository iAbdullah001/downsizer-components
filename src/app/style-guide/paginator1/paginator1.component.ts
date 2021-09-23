import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dzr-paginator1',
  templateUrl: './paginator1.component.html',
  styleUrls: ['./paginator1.component.scss'],
})
export class Paginator1Component implements OnInit {
  @Input() set length(length: number) {
    this._length = length;
  }
  @Input() set pageSize(pageSize: number) {
    this._pageSize = pageSize;
    const remainder = this._length % this._pageSize !== 0;
    this.setNumberOfPages(remainder);
  }

  private _pageSlots = 7;
  private _length = 0;
  private _pageSize = 0;
  private _numberOfPages = 0;

  pages: number[] = [];
  selectedPage = 1;

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

  createArray(): number[] {
    return Array.from({ length: this._numberOfPages }, (_, i) => i + 1);
  }

  setNumberOfPages(remainder: boolean) {
    const integer = parseInt(
      (this._length / this._pageSize).toString().split('.')[0]
    );
    this._numberOfPages = remainder ? integer + 1 : integer;
  }

  pageClicked(page: number) {
    if (this._numberOfPages <= this._pageSlots) {
      this.selectedPage = page;
    } else {
      this.handleOutOfPageSlots(page);
    }
  }

  handleOutOfPageSlots(page: number) {
    if (page === -2) {
    } else {
      if (this.pages.indexOf(page) === 4) {
        this.pages[1] = -1;
        this.pages[2] = page - 1;
        this.pages[3] = page;
        this.pages[4] = page + 1;
        if (page + 3 === this._numberOfPages) {
        }
      }
      this.selectedPage = page;
    }
  }

  get showProp() {
    return {
      numberOfPages: this._numberOfPages,
    };
  }
}
