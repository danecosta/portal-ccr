import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-postos-combustivel',
  templateUrl: './postos-combustivel.page.html',
  styleUrls: ['./postos-combustivel.page.scss'],
})
export class PostosCombustivelPage extends Utils implements OnInit {

  itens: any[];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit() {
    this.itens = [
      { descricao: 'Ipiranga', logo: "assets/imgs/ipiranga.png", destino: '', habilitado: false },
      { descricao: 'Petrobras BR', logo: "assets/imgs/petrobras.png", destino: '', habilitado: false },
      { descricao: 'Agrisal', logo: "assets/imgs/agrisal.jpg", destino: '', habilitado: false },
      { descricao: 'Outros', logo: "assets/imgs/postos.jpg", destino: '', habilitado: false },
    ];
  }
}