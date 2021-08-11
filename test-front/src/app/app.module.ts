import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DossierComponent } from './dossier/dossier.component';

// RCV 08/11/21 
import { HttpClientModule } from '@angular/common/http';
import { DossierService } from './dossier.service';

@NgModule({
  declarations: [
    AppComponent,
    DossierComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DossierService],
  bootstrap: [AppComponent]
})
export class AppModule { }
