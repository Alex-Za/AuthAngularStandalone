import {Routes} from "@angular/router";
import {AdminHomeComponent} from "./admin-home/admin-home.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'admin-home',
    pathMatch: 'full'
  },
  {
    path: 'admin-home',
    component: AdminHomeComponent
  }
]
