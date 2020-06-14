import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
})
export class NoticiasPage extends Utils implements OnInit {

  itens: any[];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit() {
    this.itens = [
      { descricao: 'Rádio CCRFM', icone: 'radio-outline', destino: '', habilitado: false },
      { descricao: 'Financeiro', icone: 'logo-usd', destino: '', habilitado: false },
      { descricao: 'Política', icone: 'briefcase-outline', destino: '', habilitado: false },
      { descricao: 'Previsão do Tempo', icone: 'partly-sunny-outline', destino: '', habilitado: false },
      { descricao: 'Esportes', icone: 'football-outline', destino: '', habilitado: false },
      { descricao: 'Entreterimento', icone: 'tv-outline', destino: '', habilitado: false },
    ];
  }
}
