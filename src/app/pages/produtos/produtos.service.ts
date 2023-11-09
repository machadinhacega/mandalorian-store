import { Injectable } from '@angular/core';
import { ItemLojaType } from '../../types/itemLojaType';
import { itensLoja } from 'src/constants/itens-loja';


export class ProdutosService {

  constructor() { }

  public getItens(): ItemLojaType[]{
    return itensLoja;
  }

  public getItemById(id:string): ItemLojaType | undefined{
    return itensLoja.find(item => item.id === id)
  }

  


}
