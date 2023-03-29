import {Component, OnDestroy} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {NavComponent} from "./nav/nav.component";
import {ACCESS_TOKEN, LocalStorageManagerService} from "./global/services/local-storage-manager.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'auth-standalone-project'

  constructor(private localStorageService: LocalStorageManagerService) {
  }

  ngOnDestroy(): void {
    this.localStorageService.removeFromStorage(ACCESS_TOKEN)
  }
}
