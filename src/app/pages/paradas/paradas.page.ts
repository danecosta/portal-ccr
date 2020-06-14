import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-paradas',
  templateUrl: './paradas.page.html',
  styleUrls: ['./paradas.page.scss'],
})
export class ParadasPage extends Utils implements OnInit {

  itens: any[];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit() {
    this.itens = [
      { descricao: 'Estrutura / Banho', icone: 'water-outline', destino: '', habilitado: false },
      { descricao: 'Restaurante', icone: 'restaurant-outline', destino: '', habilitado: false },
      { descricao: 'Espaço Convivência', icone: 'people-outline', destino: '', habilitado: false },
      { descricao: 'Estacionamento', icone: 'car-outline', destino: '', habilitado: false },
      { descricao: 'Área de descanso', icone: 'moon-outline', destino: '', habilitado: false },
    ];
  }
}
