export interface ColumnDef<T> {
	columnDef: string;
	header: string;
	cell: (o: T) => string | number | Date;
}
