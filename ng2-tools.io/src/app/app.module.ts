import { MaterialModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Ng2TableModule } from 'ng2-table/ng2-table';

import {  Ng2ToolsModule } from 'ng2-tools/module';

import { APP_ROUTES } from './app.routes';
import { APP_COMPONENTS } from './app-components';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        ...APP_COMPONENTS
    ],
    imports: [
        Ng2TableModule,
        CommonModule,
        FormsModule,
        BrowserModule,
        MaterialModule,
        HttpModule,
        Ng2ToolsModule,
        RouterModule.forRoot(APP_ROUTES)
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
