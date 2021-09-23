import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { IconsModule } from '../icons/icons.module';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './button/button.component';
import { PaginationDirective } from './directives/pagination.directive';
import { DropdownComponent } from './dropdown/dropdown.component';
import { NgxPaginatorComponent } from './ngx-paginator/ngx-paginator.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { Paginator1Component } from './paginator1/paginator1.component';
import { Paginator3Component } from './paginator3/paginator3.component';
import { StyleGuideRoutingModule } from './style-guide-routing.module';
import { StyleGuideComponent } from './style-guide.component';
import { TableDraggerComponent } from './table-dragger/table-dragger.component';
import { TableComponent } from './table/table.component';
import { TableFooterComponent } from './table-footer/table-footer.component';

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
  ],
  imports: [
    // Common
    CommonModule,
    StyleGuideRoutingModule,
    DragDropModule,
    NgxPaginationModule,

    // Material
    MaterialModule,

    // Feather Icons
    IconsModule,
  ],
})
export class StyleGuideModule {}
