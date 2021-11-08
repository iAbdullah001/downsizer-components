import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';
import { AutoCompleteService } from './auto-complete.service';

@Component({
  selector: 'dzr-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss'],
})
export class AutoCompleteComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;

  constructor(private autoCompleteSvc: AutoCompleteService) {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(1000),
      switchMap((val) => this.autoCompleteSvc.getUsers(val))
    );
  }

  ngOnInit(): void {}
}
