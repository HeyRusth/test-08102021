import { Component, OnInit } from "@angular/core";
import { DossierService } from "../dossier.service";

@Component({
  selector: "app-dossier",
  templateUrl: "./dossier.component.html",
  styleUrls: ["./dossier.component.css"],
})
export class DossierComponent implements OnInit {
  public dossiersList: any = [];
  constructor(private _dossierService: DossierService) {}

  ngOnInit() {
    this._dossierService.getDossier().subscribe((data) => {
      this.dossiersList = data;
      return;
    });
  }
}
