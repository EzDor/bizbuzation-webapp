export class RoutePathConstant {
	/****************************
	 ** Report Expanse Routes **
	 ****************************/
	public static readonly REPORT_EXPENSE_BASE_ROUTE = 'report-expense';
	public static readonly REPORT_EXPENSE_DATA_ROUTE = 'expanse-data';
	public static readonly REPORT_EXPENSE_CONSTANT_ROUTE = 'expense-constant';

	/****************************
	 ** Report Expanse Paths **
	 ****************************/
	public static readonly REPORT_EXPENSE_DATA_ROUTE_PATH = `${RoutePathConstant.REPORT_EXPENSE_BASE_ROUTE}/${RoutePathConstant.REPORT_EXPENSE_DATA_ROUTE}`;
	public static readonly REPORT_EXPENSE_CONSTANT_ROUTE_PATH = `${RoutePathConstant.REPORT_EXPENSE_BASE_ROUTE}/${RoutePathConstant.REPORT_EXPENSE_CONSTANT_ROUTE}`;
}
