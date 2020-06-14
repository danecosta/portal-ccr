import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Utils } from '../utils';

@Component({
  selector: 'app-saude-bem-estar',
  templateUrl: './saude-bem-estar.page.html',
  styleUrls: ['./saude-bem-estar.page.scss'],
})
export class SaudeBemEstarPage extends Utils implements OnInit {

  itens: any[];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit() {
    this.itens = [
      { descricao: 'Prontuário Eletrônico', icone: 'create-outline', destino: 'prontuario', habilitado: true },
      { descricao: 'Estrada para a Saúde', icone: 'medkit-outline', destino: '', habilitado: false },
      { descricao: 'Acolhimento e bem-estar', icone: 'heart-outline', destino: '', habilitado: false },
      { descricao: 'Corona Vírus', icone: 'skull-outline', destino: '', habilitado: false },
      { descricao: 'Doação de Sangue', icone: 'water-outline', destino: '', habilitado: false },
      { descricao: 'Exercícios Tabata', icone: 'barbell-outline', destino: '', habilitado: false },
      { descricao: 'Dicas Nutricionais', icone: 'nutrition-outline', destino: '', habilitado: false },
    ];
  }
}
