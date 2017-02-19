import { element } from 'protractor';
import { IMenuGroup } from './menu-group.interface';
import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
    selector: 'components-menu',
    templateUrl: './components-menu.html',
    styleUrls: ['./components-menu.scss'],
    encapsulation: ViewEncapsulation.None
})
export class ComponentsMenuComponent {
    @Input() set menuItems(items: Array<IMenuGroup>) {
        this.setCurrentItems(items);
    };
    @Output() onItemClicked: EventEmitter<any> = new EventEmitter<any>();

    private viewMenuItems: Array<IMenuGroup> = [];

    constructor(
        private router: Router
    ) {
        this.router.events.subscribe(navigation => {
            if (navigation instanceof NavigationEnd) {
                this.markActiveItem();
            }
        });
    }

    navigateToUrl(item) {
        this.onItemClicked.emit(item);
        this.router.navigate(item.url);
    }

    setCurrentItems(items: Array<IMenuGroup>) {
        if (!items) {
            return;
        }
        this.viewMenuItems = items;
        this.markActiveItem();
    }

    markActiveItem() {
        if (!this.viewMenuItems) {
            return;
        }

        this.viewMenuItems.forEach(element => {
            element.optionsList.forEach(listItem => {
                listItem.selected = ("" + location.href).indexOf(listItem.url) !== -1;
            });
        });
    }
}