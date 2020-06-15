import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-rotas',
  templateUrl: './rotas.page.html',
  styleUrls: ['./rotas.page.scss'],
})
export class RotasPage extends Utils implements OnInit {

  itens: any[];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit() {
    this.itens = [
      { descricao: 'Rotas Personalizadas', icone: 'map-outline', destino: '', habilitado: false },
      { descricao: 'Cálculo de Frete', icone: 'calculator-outline', destino: '', habilitado: false },
      { descricao: 'Contato Chapas', icone: 'call-outline', destino: '', habilitado: false },
      { descricao: 'Postos Polícia Rodoviária', icone: 'shield-checkmark-outline', destino: '', habilitado: false },
    ];
  }
}
