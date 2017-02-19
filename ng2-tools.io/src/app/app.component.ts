import { BackendService } from './app.service';
import { Component, ViewEncapsulation, HostListener, HostBinding } from '@angular/core';

import { AppModeService } from 'ng2-tools';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./app.component.scss'],
  providers: [
    BackendService
  ]
})
export class AppComponent {
  title = 'app works!';
  @HostBinding("class") appTheme = "app-light-theme";

  constructor(
    private appModeService: AppModeService
  ) { }

  @HostListener('window:resize', ['$event'])
  private onWindowResize() {
    this.appModeService.updateActiveMode();
  }
}
