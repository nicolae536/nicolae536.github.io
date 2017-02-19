import { Dictionary } from 'ng2-tools';
import { Injectable, EventEmitter, OnDestroy } from '@angular/core';

@Injectable()
export class AppCommunicationService implements OnDestroy {
    private events: Dictionary<EventEmitter<any>> = {};

    constructor() {
    }

    defineChannel(channelName) {
        if (this.events[channelName]) {
            return;
        }

        this.events[channelName] = new EventEmitter();
    }

    getChannel(channelName) {
        if (!this.events[channelName]) {
            this.defineChannel(channelName);
        }

        return this.events[channelName];
    }

    sendNotification(channelName, data?) {
        if (!this.events[channelName]) {
            return;
        }

        this.events[channelName].emit(data);
    }

    destroyChannel(channelName) {
        if (!this.events[channelName]) {
            return;
        }

        this.events[channelName].unsubscribe();
        this.events[channelName] = null;
    }

    ngOnDestroy() {
        for (let prop in this.events) {
            if (!this.events.hasOwnProperty(prop)) {
                continue;
            }

            this.events[prop].unsubscribe();
            this.events[prop] = null;
        }
    }
}