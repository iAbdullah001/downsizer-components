import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StyleGuideRoutingModule } from './style-guide-routing.module';
import { StyleGuideComponent } from './style-guide.component';

@NgModule({
  declarations: [StyleGuideComponent],
  imports: [
    // Common
    CommonModule,
    StyleGuideRoutingModule,

    // Material
  ],
})
export class StyleGuideModule {}
