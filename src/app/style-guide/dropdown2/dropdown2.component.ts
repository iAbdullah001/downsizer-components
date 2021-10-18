import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

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

  // Open close
  @ViewChild('dropdown2SelectBox') dropdown2SelectBox!: ElementRef;

  constructor(private eRef: ElementRef) {}

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

  @HostListener('click', ['$event'])
  clickHandler(event: any) {
    if (
      this.eRef.nativeElement.children[0].classList.contains(
        'options-container active'
      )
    ) {
      console.log(this.eRef.nativeElement.classList, 'opened');
    } else {
      console.log(this.eRef.nativeElement.classList, 'closed');
    }
  }
}
