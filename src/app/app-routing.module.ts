import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ProdutosListComponent } from './views/home/produtos-list/produtos-list.component';

const routes: Routes = [

  {
    path:'',
 component: HomeComponent
  },
  {
    path:'produtos',
 component: ProdutosListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
