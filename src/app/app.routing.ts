import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {TestService} from "./global/services/test.service";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    providers: [TestService]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.routing').then(r => r.ADMIN_ROUTES)
  }
]
