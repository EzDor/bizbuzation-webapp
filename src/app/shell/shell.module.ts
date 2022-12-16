import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
	declarations: [NotFoundComponent, NavBarComponent, SideBarComponent],
	exports: [NavBarComponent, SideBarComponent],
	imports: [SharedModule, RouterModule],
})
export class ShellModule {}
