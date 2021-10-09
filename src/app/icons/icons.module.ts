import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import {
  AlertCircle,
  ArrowRight,
  Calendar,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Download,
  Mail,
  Minus,
  MoreHorizontal,
  Triangle,
} from 'angular-feather/icons';
import { SortAsc, SortDesc } from './custom-icons';

const icons = {
  ArrowRight,
  Mail,
  AlertCircle,
  Calendar,
  CheckCircle,
  ChevronUp,
  ChevronDown,
  MoreHorizontal,
  Download,
  ChevronRight,
  ChevronLeft,
  Minus,
  Triangle,
  SortDesc,
  SortAsc,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
