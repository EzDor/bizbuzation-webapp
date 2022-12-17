import { Component, OnInit } from '@angular/core';
import { RoutePathConstant } from '@models/route-path-constant';
import { MenuItem } from '@models/sidebar/menu-item';

@Component({
	selector: 'app-side-bar',
	templateUrl: './side-bar.component.html',
	styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
	public menuItems: MenuItem[] = [
		{ displayName: 'Expense Data', link: RoutePathConstant.REPORT_EXPENSE_DATA_ROUTE_PATH },
		{ displayName: 'Constant Expense', link: RoutePathConstant.REPORT_EXPENSE_CONSTANT_ROUTE_PATH },
	];
	constructor() {}

	ngOnInit(): void {}
}
