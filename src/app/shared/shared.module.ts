import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { SvgIconComponent } from "src/app/shared/svg-icon/svg-icon.component";
import { DataTableComponent } from './data-table/data-table.component';


const materialComponents  = [
  MatSidenavModule,
  MatIconModule
];

const declarations = [
  SvgIconComponent,
  DataTableComponent
]

@NgModule({
  // declarations,
  imports: [
    CommonModule,
    ...materialComponents
  ],
  declarations,
  exports: [
    ...materialComponents,
    ...declarations,
  ],
})
export class SharedModule { }
