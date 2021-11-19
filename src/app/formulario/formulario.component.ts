import { Component, OnInit } from '@angular/core';
import { Egreso } from '../egresos/egreso.model';
import { egresoService } from '../egresos/egresoService.service';
import { Ingreso } from '../ingresos/ingreso.model';
import { IngresoService } from '../ingresos/ingresoService.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  nombreInput:string;
  valorInput:number;

  tipo:string = "IngresoOperacion"

  constructor(private Ingresos:IngresoService, private Egresos:egresoService) { }

  ngOnInit(): void {
  }
  CambiarTipo(event){
    this.tipo = event.target.value;

  }

  addvalor(){
    if (this.tipo === "IngresoOperacion") {
      this.Ingresos.ingresos.push(new Ingreso(this.nombreInput, this.valorInput) )
    }else{
      this.Egresos.egresos.push(new Egreso(this.nombreInput, this.valorInput) )
    }
  }

}
