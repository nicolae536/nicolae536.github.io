import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { BackendService } from './../app.service';
import { AppModeService, AppMode } from "ng2-tools";

@Component({
    selector: 'home-page',
    templateUrl: './home-page.html',
    styleUrls: ['./home-page.scss'],
    encapsulation: ViewEncapsulation.None
})
export class HomePageComponent {
    formDefinition = null;
    value = null;
    dataServices = {};
    isMobileView;
    isTablet;

    constructor(
        private appModeService: AppModeService
    ) {
        this.appModeService.activeMode.subscribe(this.setCurrentView.bind(this))
    }

    setCurrentView(view: string) {
        this.isMobileView = view === AppMode.MOBILE;
        this.isTablet =  view === AppMode.TABLET;
    }
}
