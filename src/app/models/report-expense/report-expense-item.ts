export interface ReportExpenseItem {
  id: number;
  date: Date;
  amount: number;
  account: string;
  type: string;
  subtype: string;
  comment: string;
}
