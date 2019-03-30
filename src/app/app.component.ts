import { Component, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {

	constructor(public overlayContainer: OverlayContainer){}
	@HostBinding('class') componentCssClass;
	events: string[] = [];
	title = 'Material Theming';
	opened: boolean;

	onSetTheme(theme) {
	    this.overlayContainer.getContainerElement().classList.add(theme);
	    this.componentCssClass = theme;
  	}

}
