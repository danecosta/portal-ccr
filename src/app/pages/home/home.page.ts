import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Utils } from '../utils';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends Utils implements OnInit {

  cards: any[] = [
    { titulo: 'Rotas', destino: 'rotas', descricao: 'Pegue sempre o melhor caminho para chegar ao seu destino!', icone: 'map-outline' },
    { titulo: 'Postos CCR', destino: 'postos-ccr', descricao: 'Saiba onde encontrar os postos da CCR!', icone: 'pin' },
    { titulo: 'Paradas', destino: 'paradas', descricao: 'Que tal um banho quente? Ou uma refeição bem gostosa?', icone: 'cafe-outline' },
    { titulo: 'Postos de Combustíveis', destino: 'postos-combustivel', descricao: 'Saiba onde abastecer seu caminhão e evite contratempos!', icone: 'speedometer-outline' },
    { titulo: 'Saúde e bem-estar', destino: 'saude-bem-estar', descricao: 'Lembre-se: saúde em primeiro lugar!', icone: 'fitness-outline' },
    { titulo: 'Emergências', destino: 'emergencia', descricao: 'Não hesite em pedir ajuda!', icone: 'call-outline' },
    { titulo: 'Comunicados', destino: 'comunicados', descricao: 'Fique sempre por dentro do que acontece na CCR!', icone: 'megaphone-outline', cor: 'red' },
    { titulo: 'Notícias', destino: 'noticias', descricao: 'O que acontece no Brasil e no mundo!', icone: 'alert-circle-outline' },
  ];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit(): void {
  }

}
