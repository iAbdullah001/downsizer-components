import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { ButtonComponent } from './button/button.component';
import { StyleGuideRoutingModule } from './style-guide-routing.module';
import { StyleGuideComponent } from './style-guide.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [StyleGuideComponent, TableComponent, ButtonComponent],
  imports: [
    // Common
    CommonModule,
    StyleGuideRoutingModule,
    DragDropModule,

    // Material
    MaterialModule,
  ],
})
export class StyleGuideModule {}
