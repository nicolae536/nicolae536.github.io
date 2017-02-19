import { SERVER_MAP } from './../shared/server-map';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BackendService } from './../app.service';

@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomePageComponent implements OnInit {
    formDefinition = null;
    value = null;
    dataServices = {};

    constructor(
        private backendService: BackendService
    ) {
    }

    ngOnInit() { }
}
