// Regra de negócio fica no serviço
// Regra de página fica no ts
// Tela fica no html
// Estilização no scss
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ItemLojaType } from 'src/app/types/itemLojaType';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.scss']
})
export class ListaItemComponent {

  @Input() listaItem: ItemLojaType[] = [];
  @Output() adicionarItemAoCarrinho = new EventEmitter<string>();
  
  
  // ngOnInit():void{
  //   this.itensDaLoja = this._service.getItens()
  // }


  public adicionar(id:string):void{
    this.adicionarItemAoCarrinho.emit(id) 
  }
 
}
