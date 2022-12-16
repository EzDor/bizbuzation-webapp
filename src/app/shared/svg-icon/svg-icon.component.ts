import { Component, Input, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
	selector: 'app-svg-icon',
	templateUrl: './svg-icon.component.html',
	styleUrls: ['./svg-icon.component.scss'],
})
export class SvgIconComponent implements OnInit {
	@Input()
	public svgIconName: string = '';

	@Input()
	public inline: boolean = true;

	private static readonly svgIconPrefix: string = 'assets/svgs/';

	private static readonly svgIconSuffix: string = '.svg';

	constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}

	public ngOnInit() {
		this.matIconRegistry.addSvgIcon(
			this.svgIconName,
			this.domSanitizer.bypassSecurityTrustResourceUrl(SvgIconComponent.svgIconPrefix + this.svgIconName + SvgIconComponent.svgIconSuffix)
		);
	}
}
