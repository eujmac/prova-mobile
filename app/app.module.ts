import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistoricoComponent } from './componentes/historico/historico.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ApresentacaoComponent } from './componentes/apresentacao/apresentacao.component';

@NgModule({
  declarations: [
    AppComponent,
    HistoricoComponent,
    CalculadoraComponent,
    ApresentacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
