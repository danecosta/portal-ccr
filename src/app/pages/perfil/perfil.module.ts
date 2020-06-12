import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PerfilPage } from './perfil.page';

import { PerfilPageRoutingModule } from './perfil-routing.module';
import { BrMaskerModule } from 'br-mask';
import { AngularFireAuthModule } from '@angular/fire/auth/';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    AngularFireAuthModule,
    BrMaskerModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule { }
