import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostosCombustivelPage } from './postos-combustivel.page';

const routes: Routes = [
  {
    path: '',
    component: PostosCombustivelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostosCombustivelPageRoutingModule {}
