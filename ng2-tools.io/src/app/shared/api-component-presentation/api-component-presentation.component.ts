import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'api-component-presentation',
	templateUrl: './api-component-presentation.html',
	styleUrls: ['./api-component-presentation.scss'],
	encapsulation: ViewEncapsulation.None
})

export class ApiComponentPresentationComponent implements OnInit {
	@Input() componentPresentationData;

	ngOnInit() { }
}