import { Component } from '@angular/core';

import { ProdutosService } from './produtos.service';
import { ItemLojaType } from 'src/app/types/itemLojaType';

import { ItemPedidoType } from 'src/app/types/pedidoType';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent {

  public itensDaLoja: ItemLojaType[] = []
  // Como so queremos o id do produto e a quantidade, o carrinho recebe apenas o ItemPedidoType
  public carrinho: ItemPedidoType[] = []   

  // Injetando dependencia: injetando dentre desse componente oq tem naquele serviço, naquele elemento para usar aqui.
  constructor(private _service: ProdutosService){}

  ngOnInit(){
    this.itensDaLoja = this._service.getItens()
  }


  public adicionarItemAoCarrinho(id:string):void{
    const produtoSelecionado = this._service.getItemById(id);
    if (produtoSelecionado){
      const indexProduto = this.carrinho.findIndex(item => item.productId === id);
      if(indexProduto > -1){    // maior que -1 quer dizer que ele existe
         this.carrinho[indexProduto].quantity++
      } else{       
        const novoItemCarrinho: ItemPedidoType = {
          productId: produtoSelecionado.id, 
          quantity: 1
        };
        this.carrinho.push(novoItemCarrinho)
      }
    }
  }

  public removerItemDoCarrinho(id:string):void{
    const indexProduto = this.carrinho.findIndex(item => item.productId === id);
    if(this.carrinho[indexProduto].quantity === 1){
      this.carrinho.splice(indexProduto, 1);
    }else{
      this.carrinho[indexProduto].quantity--
    }
  }
  


}
