import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { Egreso } from './egresos/egreso.model';
import { egresoService } from './egresos/egresoService.service';
import { Ingreso } from './ingresos/ingreso.model';
import { IngresoService } from './ingresos/ingresoService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  ingresosPadre:Ingreso[] = [];
  egresosPadre:Egreso[] = [];

//INJECTAR UNA DEPENDENCIA 
  constructor(private ingresoSer:IngresoService, private egresoSer:egresoService){
    this.ingresosPadre = this.ingresoSer.ingresos;
    this.egresosPadre = this.egresoSer.egresos;
  }

  //METODO PARA CALCULAR TOTAL INGRESO
  getIngresoTotal(){
    let totalIng = 0;
    //USAR UN FOREARCH
    //POR CADA UNO DE LOS ELEMENTOS DEL ARRAY INGRESOS (ingreso) se va a sumar en totalIngreso
    /* for(let i = 0; i<Ingreso.length; i++){
      totalIng += Ingreso[i][1];
    } */

    this.ingresosPadre.forEach(ingreso =>{
      totalIng += ingreso.valor;
    });
    return totalIng;
  }

  getEgresoTotal(){
      let totalEgr = 0;

      this.egresosPadre.forEach(egreso =>{
        totalEgr += egreso.valor;
      });
      return totalEgr;

  }

  getPorcentajeTotal(){
    let su = this.getEgresoTotal()/this.getIngresoTotal();
    return su;
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getEgresoTotal();
  }

}
