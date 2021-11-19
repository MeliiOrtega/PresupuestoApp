import { Ingreso } from "./ingreso.model";

export class IngresoService{
  ingresos:Ingreso[]=[
    new Ingreso('salario', 400),
    new Ingreso('ABONO', 500)
  ];

  delete(ingreso:Ingreso){
    const indice: number = this.ingresos.indexOf(ingreso);
    this.ingresos.splice(indice,1); 
    //ELIMINA EL NUMERO DESDE EL INDICE QUE QUEREMOS 

  }

  
}