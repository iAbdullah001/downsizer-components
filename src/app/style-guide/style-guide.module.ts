import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { IconsModule } from '../icons/icons.module';
import { MaterialModule } from '../material/material.module';
import { ApplicantDetailCardComponent } from './applicant-detail-card/applicant-detail-card.component';
import { ButtonComponent } from './button/button.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { PaginationDirective } from './directives/pagination.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { Dropdown2Component } from './dropdown2/dropdown2.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { MonthPickerComponent } from './month-picker/month-picker.component';
import { NgxPaginatorComponent } from './ngx-paginator/ngx-paginator.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { Paginator1Component } from './paginator1/paginator1.component';
import { Paginator3Component } from './paginator3/paginator3.component';
import { PasswordTootipComponent } from './password-tootip/password-tootip.component';
import { StyleGuideRoutingModule } from './style-guide-routing.module';
import { StyleGuideComponent } from './style-guide.component';
import { TableDraggerComponent } from './table-dragger/table-dragger.component';
import { TableFooterComponent } from './table-footer/table-footer.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    StyleGuideComponent,
    TableComponent,
    ButtonComponent,
    TableDraggerComponent,
    PaginationDirective,
    PaginatorComponent,
    NgxPaginatorComponent,
    Paginator1Component,
    DropdownComponent,
    Paginator3Component,
    TableFooterComponent,
    MatTableComponent,
    DatePickerComponent,
    PasswordTootipComponent,
    ApplicantDetailCardComponent,
    Dropdown2Component,
    MonthPickerComponent,
  ],
  imports: [
    // Common
    CommonModule,
    StyleGuideRoutingModule,
    DragDropModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,

    // Material
    MaterialModule,

    // Feather Icons
    IconsModule,
  ],
})
export class StyleGuideModule {}
