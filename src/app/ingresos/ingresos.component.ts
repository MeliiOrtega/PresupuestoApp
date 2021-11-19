import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { egresoService } from '../egresos/egresoService.service';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingresoService.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit {
  ingresosS:Ingreso[] = [];


  constructor(private Ingresos:IngresoService) { 
    
  }

  ngOnInit(): void {
    this.ingresosS = this.Ingresos.ingresos;
  }

  eliminar(ingreso:Ingreso){
    this.Ingresos.delete(ingreso);
  }

}
