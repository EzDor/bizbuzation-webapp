import { ReplaySubject } from 'rxjs';

export class UnsubscribeSubject extends ReplaySubject<boolean> {
	constructor() {
		super(1);
	}
	public cleanup(): void {
		this.next(true);
		this.complete();
	}
}
