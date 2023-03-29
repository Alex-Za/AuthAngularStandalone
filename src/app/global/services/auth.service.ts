import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {User} from "../entity/user";
import {Observable} from "rxjs";
import {AuthenticationResponse} from "../entity/authentication-response";
import {ACCESS_TOKEN, LocalStorageManagerService} from "./local-storage-manager.service";
import {AuthRequest} from "../entity/auth-request";
import {RegisterRequest} from "../entity/register-request";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL: string = environment.apiUrl + '/auth'

  constructor(private http: HttpClient,
              private localStorageService: LocalStorageManagerService) {
  }

  authenticate(authRequest: AuthRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(this.URL + '/authenticate', authRequest)
  }

  register(registerRequest: RegisterRequest): Observable<AuthenticationResponse> {
    return this.http.post<AuthenticationResponse>(this.URL + '/register', registerRequest);
  }

  logout(): void {
    this.localStorageService.removeFromStorage(ACCESS_TOKEN)
  }

  get accessToken(): string {
    return this.localStorageService.getFromStorage(ACCESS_TOKEN)
  }

  set accessToken(accessToken: string) {
    this.localStorageService.addToStorage(ACCESS_TOKEN, accessToken)
  }
}
