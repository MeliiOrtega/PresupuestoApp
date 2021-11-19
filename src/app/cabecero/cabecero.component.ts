import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  @Input() total: number;
  @Input() ingresosT: number;
  @Input() egresosT: number;

  @Input() porcentajeT: number;
  
  constructor() { }

  ngOnInit(): void {
  }

}
