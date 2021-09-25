import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Minus,
  MoreHorizontal,
  Triangle,
} from 'angular-feather/icons';
import { SortAsc, SortDesc } from './custom-icons';

const icons = {
  MoreHorizontal,
  Download,
  ChevronRight,
  ChevronLeft,
  Minus,
  Triangle,
  SortDesc,
  SortAsc
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
