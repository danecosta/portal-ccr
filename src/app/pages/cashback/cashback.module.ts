import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashbackPageRoutingModule } from './cashback-routing.module';

import { CashbackPage } from './cashback.page';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashbackPageRoutingModule,
  ],
  declarations: [CashbackPage],
  providers: [
    InAppBrowser,
    BarcodeScanner
  ]
})
export class CashbackPageModule { }
