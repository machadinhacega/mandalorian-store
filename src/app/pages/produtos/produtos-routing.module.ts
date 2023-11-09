import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from './produtos.component';

const routes: Routes = [
  {
    // caminho vazio, ou seja, quero entrar na pagina inicial desse componente qndo ele for chamado
    path: '',
    component: ProdutosComponent
  }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProdutosRoutingModule { }
