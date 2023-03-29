import {Injectable} from "@angular/core";
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.addTokenHeader(req))
      .pipe(
        tap((response: HttpEvent<any>) => {
          if (response instanceof HttpResponse) {
            this.processResponseAuthToken(response)
          }
        }),
        catchError((error: HttpErrorResponse) => {
          if (error instanceof HttpErrorResponse) {
            if (error.status === 403) {
              this.router.navigate(['/login'])
            }
          }
          return throwError(() => error)
        })
      )
  }

  private processResponseAuthToken(response: HttpResponse<any>): void {
    const token = response.body.token

    if (token) {
      this.authService.accessToken = token
    }
  }

  private addTokenHeader(request: HttpRequest<any>): HttpRequest<any> {
    if (this.authService.accessToken) {
      return request.clone({
        setHeaders: {Authorization: 'Bearer ' + this.authService.accessToken},
      });
    }
    return request.clone();
  }

}
