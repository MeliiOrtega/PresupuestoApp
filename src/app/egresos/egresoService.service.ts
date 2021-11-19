import { Ingreso } from "../ingresos/ingreso.model";
import { Egreso } from "./egreso.model";

export class egresoService{
  egresos: Egreso[] = [
    new Egreso('compras', 300),
    new Egreso('bebidas', 100)
  ];

  eliminar(egreso:Egreso){
    const indice: number = this.egresos.indexOf(egreso);
    this.egresos.splice(indice,1); 
    //ELIMINA EL NUMERO DESDE EL INDICE QUE QUEREMOS 

  }

  addegreso(egreso:Egreso){
    this.egresos.push(egreso)
  }
}