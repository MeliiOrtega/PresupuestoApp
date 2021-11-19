import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { EgresosComponent } from './egresos/egresos.component';
import { CabeceroComponent } from './cabecero/cabecero.component';
import { egresoService } from './egresos/egresoService.service';
import { IngresoService } from './ingresos/ingresoService.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    IngresosComponent,
    EgresosComponent,
    CabeceroComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [egresoService, IngresoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
