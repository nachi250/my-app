import { 
  Component, 
  OnInit, 
  Input, 
  SimpleChanges, 
  OnChanges,
  DoCheck,
  AfterContentInit, 
  AfterContentChecked,


} from '@angular/core';

@Component({
  selector: 'app-ciclo-producto',
  templateUrl: './ciclo-producto.component.html',
  styleUrls: ['./ciclo-producto.component.css']
})
export class CicloProductoComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked{
  @Input() nombre: string;
  @Input() cantidad: number;

  constructor() {
    console.log('llame al constructor cicloProductoComponent')
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('llame al ngOnChanges en ciclo Producto Component', changes )
  }

  ngAfterContentInit(): void {
    console.log('llame al ngAfterContenInit en cicloProductoComponent')
  }

  ngAfterContentChecked(): void {
    console.log('Llame al ngAfterContentInit en cicloProductoComponent')
  }

  ngOnInit(): void {
    console.log('llame al ngOnInit en cicloProductoComponent')
  }

  comprar(){

  }

}
