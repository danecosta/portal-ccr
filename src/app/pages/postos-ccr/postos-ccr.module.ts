import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostosCcrPageRoutingModule } from './postos-ccr-routing.module';

import { PostosCcrPage } from './postos-ccr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostosCcrPageRoutingModule
  ],
  declarations: [PostosCcrPage]
})
export class PostosCcrPageModule {}
