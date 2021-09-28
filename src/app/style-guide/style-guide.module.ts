import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { SimplebarAngularModule } from 'simplebar-angular';
import { IconsModule } from '../icons/icons.module';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './button/button.component';
import { PaginationDirective } from './directives/pagination.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { NgxPaginatorComponent } from './ngx-paginator/ngx-paginator.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { Paginator1Component } from './paginator1/paginator1.component';
import { Paginator3Component } from './paginator3/paginator3.component';
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
  ],
  imports: [
    // Common
    CommonModule,
    StyleGuideRoutingModule,
    DragDropModule,
    NgxPaginationModule,
    HttpClientModule,

    // Material
    MaterialModule,

    // Feather Icons
    IconsModule,

    // Other
    SimplebarAngularModule,
  ],
})
export class StyleGuideModule {}
