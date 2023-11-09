import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // primeira coisa é dizer o caminho da minha rota, a URL que eu quero que fique disponível
    path: 'produtos',
    // apos isso, queremos carregar esse nosso componente
    // nosso load vai importar o produtos.module, e quando carregar, ele vai chamar o ProdutosModule
    // assim so vai carregar a pagina qndo entrar nela
    loadChildren: () => import('./pages/produtos/produtos.module').then(m => m.ProdutosModule),
    // apos isso vamos criar um modulo de rotas tambmem pro nosso componente. vai ser o: produtos-routing.module.ts
  },
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full'  //pra quando entrar no root da pagina
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
