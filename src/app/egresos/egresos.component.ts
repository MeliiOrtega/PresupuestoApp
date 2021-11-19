import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { egresoService } from './egresoService.service';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.component.html',
  styleUrls: ['./egresos.component.css']
})
export class EgresosComponent implements OnInit {

  egresoS:Egreso[] = [];
  @Input() total:number;
  constructor(private EgresosSer:egresoService) { 
    this.egresoS = this.EgresosSer.egresos;
  }
  ngOnInit(): void {
  }

  eliminarEgreso(egreso:Egreso){
    this.EgresosSer.eliminar(egreso)
  }

  calcularPor(egreso:Egreso){
    return egreso.valor / this.total;
  }
}
