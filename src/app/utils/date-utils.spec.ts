import { DateUtils } from "@app/utils/date-utils";
import { ReportExpenseDateRangeType } from "@models/report-expense/report-expense-date-range-type";

describe('DateUtils', () => {
  it('should return the current date range for current month', function () {
    const now = new Date();
    const expectedDateRange = {
      startDate: new Date(now.getFullYear(), now.getMonth(), 1),
      endDate: new Date(now.getFullYear(), now.getMonth() + 1, 0),
    };

    const actualDateRange = DateUtils.getDateRangeByType(ReportExpenseDateRangeType.thisMonth);

    expect(actualDateRange).toEqual(expectedDateRange);
  });

  it('should return the current date range for 3 months ago', function () {
    const now = new Date();
    const expectedDateRange = {
      startDate: new Date(now.getFullYear(), now.getMonth() - 3, 1),
      endDate: new Date(now.getFullYear(), now.getMonth() - 2, 0),
    }

    const actualDateRange = DateUtils.getDateRangeByType(ReportExpenseDateRangeType.threeMonthsAgo);

    expect(actualDateRange).toEqual(expectedDateRange);
  });
})
