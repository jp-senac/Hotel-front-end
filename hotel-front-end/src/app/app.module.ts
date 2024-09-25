import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaloginComponent } from './telalogin/telalogin.component';
import { TelacadastroComponent } from './telacadastro/telacadastro.component';
import { TelainicialComponent } from './telainicial/telainicial.component';
import { TelareservaComponent } from './telareserva/telareserva.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaloginComponent,
    TelacadastroComponent,
    TelainicialComponent,
    TelareservaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
