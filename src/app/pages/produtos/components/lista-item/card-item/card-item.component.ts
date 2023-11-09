import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ItemLojaType } from 'src/app/types/itemLojaType';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent {
  // esse component é um componente "nao inteligente", e por isso precisa que as informações sejam passadas para ele. Ele, em si, não gerencia nada. O component "inteligente" (que no nosso caso é o lista itens) é quem está pegando as informações e fazerndo todo o trabalho.
  @Input() item: ItemLojaType | undefined;

  @Output() adicionarAoCarrinho = new EventEmitter<string>();
  

  constructor(){}

  ngOnInit(){
    console.log(this.item?.name)
  }

  public adicionar( ){
    if (!this.item?.isAvailable) return;
      this.adicionarAoCarrinho.emit(this.item.id)
    
  }

}
