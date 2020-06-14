import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-comunicados',
  templateUrl: './comunicados.page.html',
  styleUrls: ['./comunicados.page.scss'],
})
export class ComunicadosPage extends Utils implements OnInit {

  itens: any[];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit() {
    this.itens = [
      { descricao: 'Alerta das Rodovias', icone: 'alert-outline', destino: '', habilitado: false },
      { descricao: 'Eventos CCR', icone: 'calendar-outline', destino: '', habilitado: false },
      { descricao: 'Campanhas', icone: 'list-outline', destino: '', habilitado: false },
    ];
  }
}
