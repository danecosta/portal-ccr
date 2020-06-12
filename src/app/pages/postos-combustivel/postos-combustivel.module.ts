import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostosCombustivelPageRoutingModule } from './postos-combustivel-routing.module';

import { PostosCombustivelPage } from './postos-combustivel.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostosCombustivelPageRoutingModule
  ],
  declarations: [PostosCombustivelPage]
})
export class PostosCombustivelPageModule {}
