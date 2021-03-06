import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { SvgIconComponent } from 'src/app/shared/svg-icon/svg-icon.component';
import { DataTableComponent } from './data-table/data-table.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatSelectModule } from '@angular/material/select';

const materialComponents = [
	MatSidenavModule,
	MatIconModule,
	MatTableModule,
	MatSortModule,
	MatProgressSpinnerModule,
	MatButtonModule,
	MatSelectModule,
];

const angularComponents = [CommonModule, ReactiveFormsModule];

const declarations = [SvgIconComponent, DataTableComponent, SpinnerComponent];

@NgModule({
	declarations,
	imports: [...angularComponents, ...materialComponents],
	exports: [...angularComponents, ...materialComponents, ...declarations],
})
export class SharedModule {}
