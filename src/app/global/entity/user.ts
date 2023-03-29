import {Role} from "../app.constants";

export class User {
  constructor(
    public id: number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public password: string,
    public role: Role
  ) {
  }
}
