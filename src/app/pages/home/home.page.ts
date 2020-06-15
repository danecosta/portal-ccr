import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, MenuController } from '@ionic/angular';
import { Utils } from '../utils';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage extends Utils implements OnInit {

  cards: any[] = [
    { titulo: 'Saúde e bem-estar', destino: 'saude-bem-estar', descricao: 'Lembre-se: saúde em primeiro lugar!', icone: 'fitness-outline' },
    { titulo: 'Rotas', destino: 'rotas', descricao: 'Pegue sempre o melhor caminho para chegar ao seu destino!', icone: 'map-outline' },
    { titulo: 'Postos CCR', destino: 'postos-ccr', descricao: 'Saiba onde encontrar os postos da CCR!', icone: 'pin' },
    { titulo: 'Paradas', destino: 'paradas', descricao: 'Que tal uma parada para relaxar e repor as energias?', icone: 'cafe-outline' },
    { titulo: 'Postos de Combustíveis', destino: 'postos-combustivel', descricao: 'Precisando abastecer, trocar óleo, conferir os pneus? Evite contratempos!', icone: 'speedometer-outline' },
    { titulo: 'Emergências', destino: 'emergencia', descricao: 'Você não está sozinho. Estão todos aqui para ajudar no que for preciso!', icone: 'call-outline' },
    { titulo: 'Comunicados', destino: 'comunicados', descricao: 'Fique por dentro do que acontece na CCR!', icone: 'megaphone-outline', cor: 'red' },
    { titulo: 'Notícias', destino: 'noticias', descricao: 'O que acontece no Brasil e no mundo!', icone: 'alert-circle-outline' },
  ];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit(): void {
  }

}
