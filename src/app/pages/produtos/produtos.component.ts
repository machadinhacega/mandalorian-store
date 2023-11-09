import { Component } from '@angular/core';

import { ProdutosService } from './produtos.service';
import { ItemLojaType } from 'src/app/types/itemLojaType';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  public itensDaLoja: ItemLojaType[] = []

  // Injetando dependencia: injetando dentre desse componente oq tem naquele serviço, naquele elemento para usar aqui.
  constructor(private _service: ProdutosService){}

  ngOnInit(){
    this.itensDaLoja = this._service.getItens()
  }

  public adicionarItemAoCarrinho(id:string):void{
    const produtoSelecionado = this._service.getItemById(id);
    if (produtoSelecionado){
      alert(`${produtoSelecionado.name} adicionado ao carrinho`)
    }
  }
  

}
