import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { SERVER_MAP } from './../../server-map';
import { BackendService } from './../../../app.service';

@Component({
	selector: 'form-example',
	templateUrl: './form-example.html',
	encapsulation: ViewEncapsulation.None,
	styles: [`form {
		margin-bottom: 200px;
	}`]
})

export class FormExampleComponent {
	@Input()
	set config(data) {
		if (!data) {
			return;
		}

		this.getFormDefinition(data);
	}
	formDefinition = null;
	dataServices = {};

	constructor(
		private backend: BackendService
	) { }

	getFormDefinition(data) {
		this.backend.getConfiguration(SERVER_MAP.formDefinitions[data.serverMap])
			.subscribe(value => {
				if (value['rows']) {
					value['rows'].forEach(row => {
						row["elements"].forEach(element => {
							if (element.type === "autocomplete") {
								this.dataServices[element.name] = this.backend;
							}
						});
					});
				}

				this.formDefinition = value;
			});
	}
}