import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  MoreHorizontal,
} from 'angular-feather/icons';

const icons = {
  MoreHorizontal,
  Download,
  ChevronRight,
  ChevronLeft,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
