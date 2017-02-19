import { Component, OnInit, Input, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
	selector: 'api-reference-reader',
	templateUrl: './api-reference-reader.html',
	styleUrls: ['./api-reference-reader.scss'],
	encapsulation: ViewEncapsulation.None
})

export class ApiReferenceReaderComponent {
	@Input() data;

	minSiblingWidth;

	private config = {
		className: ['table-striped', 'table-bordered']
	};
}