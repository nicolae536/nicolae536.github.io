import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BackendService } from './../../../app.service';

@Component({
    selector: 'autocomplete-example',
    templateUrl: './autocomplete-example.html',
    styleUrls: ['./autocomplete-example.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AutocompleteExampleComponent implements OnInit {

    autocompleteConfigurtation = {
        searchConfig: {
            searchingItemsMessage: "Loading data",
            throttleTimer: 300,
            minSearchQueryLength: 3,
        },
        activateOnFocus: true,
        listMapping: {
            valueField: "value",
            visibleField: "text"
        }
    };

    simpleHint = {
        align: 'start',
        value: 'Autocomplete test'
    };

    constructor(
        private backendService: BackendService
    ) { }

    ngOnInit() { }
}
