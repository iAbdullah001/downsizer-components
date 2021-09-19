import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './button/button.component';
import { PaginationDirective } from './directives/pagination.directive';
import { NgxPaginatorComponent } from './ngx-paginator/ngx-paginator.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { StyleGuideRoutingModule } from './style-guide-routing.module';
import { StyleGuideComponent } from './style-guide.component';
import { TableDraggerComponent } from './table-dragger/table-dragger.component';
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
  ],
  imports: [
    // Common
    CommonModule,
    StyleGuideRoutingModule,
    DragDropModule,
    NgxPaginationModule,

    // Material
    MaterialModule,
  ],
})
export class StyleGuideModule {}
