import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable()
export class TestService {

  constructor(
    private http: HttpClient
  ) {
  }

  getTest(): Observable<any> {
    return this.http.get(environment.apiUrl + '/test')
  }
}
