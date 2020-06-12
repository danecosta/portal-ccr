import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeBemEstarPage } from './saude-bem-estar.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeBemEstarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeBemEstarPageRoutingModule {}
