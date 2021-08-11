import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class DossierService {

  private _url: string = `http://localhost:3002/dossier/`;
  constructor(private http: HttpClient) {}

  getDossier() {
    return this.http.get(this._url);
  }
}
