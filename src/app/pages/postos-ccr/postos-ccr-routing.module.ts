import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostosCcrPage } from './postos-ccr.page';

const routes: Routes = [
  {
    path: '',
    component: PostosCcrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostosCcrPageRoutingModule {}
