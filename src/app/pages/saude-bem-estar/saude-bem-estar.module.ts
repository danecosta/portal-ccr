import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeBemEstarPageRoutingModule } from './saude-bem-estar-routing.module';

import { SaudeBemEstarPage } from './saude-bem-estar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeBemEstarPageRoutingModule
  ],
  declarations: [SaudeBemEstarPage]
})
export class SaudeBemEstarPageModule {}
