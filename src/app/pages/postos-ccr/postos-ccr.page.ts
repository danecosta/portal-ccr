import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-postos-ccr',
  templateUrl: './postos-ccr.page.html',
  styleUrls: ['./postos-ccr.page.scss'],
})
export class PostosCcrPage extends Utils implements OnInit {

  itens: any[];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit() {
    this.itens = [
      { descricao: 'SOS CCR', icone: 'headset-outline', destino: '', habilitado: false },
      { descricao: 'Pedágios', icone: 'card-outline', destino: '', habilitado: false },
    ];
  }
}
