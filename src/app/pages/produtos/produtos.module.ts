import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaItemModule } from './components/lista-item/lista-item.module';

import { ProdutosComponent } from './produtos.component';

import { ProdutosService } from './produtos.service'

@NgModule({
  exports: [
    ProdutosComponent
  ],
  
  declarations: 
  [
    // se não tiver ProdutosComponent aqui tbm, vai quebrar
    ProdutosComponent
  ],

  imports: [
    CommonModule, 
    ListaItemModule,
  ],
  providers:[
    ProdutosService
  ]

})
export class ProdutosModule {}

