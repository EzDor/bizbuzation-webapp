import { DateRange } from '@models/api-forms/date-range';
import { ReportExpenseDateRangeType } from '@models/report-expense/report-expense-date-range-type';

export class DateUtils {
	public static getDateRangeByType(reportExpenseDateRangeType: ReportExpenseDateRangeType): DateRange {
		switch (reportExpenseDateRangeType) {
			case ReportExpenseDateRangeType.thisMonth:
				return DateUtils.getDateRangeForFullMonth(0);
			case ReportExpenseDateRangeType.lastMonth:
				return DateUtils.getDateRangeForFullMonth(-1);
			case ReportExpenseDateRangeType.twoMonthsAgo:
				return DateUtils.getDateRangeForFullMonth(-2);
			case ReportExpenseDateRangeType.threeMonthsAgo:
				return DateUtils.getDateRangeForFullMonth(-3);
		}
	}

	private static getDateRangeForFullMonth(monthOffset: number): DateRange {
		const now = new Date();
		const startDate = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
		const endDate = new Date(now.getFullYear(), now.getMonth() + monthOffset + 1, 0);
		return { startDate, endDate };
	}
}
