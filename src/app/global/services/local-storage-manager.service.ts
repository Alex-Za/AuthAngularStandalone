import {Injectable} from "@angular/core";

export const ACCESS_TOKEN = 'access-token'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageManagerService {

  addToStorage(property: string, value: string): void {
    localStorage.setItem(property, value)
  }

  getFromStorage(property: string): string {
    return localStorage.getItem(property)
  }

  removeFromStorage(property: string): void {
    localStorage.removeItem(property);
  }
}
