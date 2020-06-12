import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cards: any[] = [
    { titulo: 'Comunicados', destino: 'comunicados', descricao: 'Fique sempre por dentro do que acontece na CCR!', icone: 'megaphone-outline', cor: 'red' },
    { titulo: 'Notícias', destino: 'noticias', descricao: 'O que acontece no Brasil e no mundo!', icone: 'alert-circle-outline' },
    { titulo: 'Postos CCR', destino: 'postos-ccr', descricao: 'Saiba onde encontrar os postos da CCR!', icone: 'pin' },
    { titulo: 'Rotas', destino: 'rotas', descricao: 'Pegue sempre o melhor caminho para chegar ao seu destino!', icone: 'map-outline' },
    { titulo: 'Paradas', destino: 'paradas', descricao: 'Que tal um banho quente? Ou uma refeição bem gostosa?', icone: 'cafe-outline' },
    { titulo: 'Saúde e bem estar', destino: 'saude-bem-estar', descricao: 'Lembre-se: saúde em primeiro lugar!', icone: 'fitness-outline' },
    { titulo: 'Postos de Combustível', destino: 'postos-combustivel', descricao: 'Saiba onde abastecer seu caminhão e evite contratempos!', icone: 'speedometer-outline' },
    { titulo: 'Emergência', destino: 'emergencia', descricao: 'Não hesite em pedir ajuda!', icone: 'call-outline' },
  ];
  constructor(private navCtrl: NavController) { }

  irPara(paginaDestino) {
    this.navCtrl.navigateForward(paginaDestino);
  }

}
