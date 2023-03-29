import {importProvidersFrom} from '@angular/core';
import {PreloadAllModules, provideRouter, withPreloading} from "@angular/router";
import {AppComponent} from "./app/app.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {bootstrapApplication} from "@angular/platform-browser";
import {APP_ROUTES} from "./app/app.routing";
import {AuthInterceptor} from "./app/global/interceptors/auth.interceptor";

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      HttpClientModule
    ),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules)),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ]
})
