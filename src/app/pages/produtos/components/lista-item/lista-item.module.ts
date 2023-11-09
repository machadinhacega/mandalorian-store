// Todo componente que cria uma ação deve ter um modulo, e entao os filhos dele vao ser declarados
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaItemComponent } from './lista-item.component';
import { CardItemComponent } from './card-item/card-item.component';


@NgModule({
  declarations: [ListaItemComponent, CardItemComponent],
  providers:[],
  exports:[ListaItemComponent],
  imports: [
    CommonModule
  ]
})
export class ListaItemModule { }
