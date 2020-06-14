import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-postos-ccr',
  templateUrl: './postos-ccr.page.html',
  styleUrls: ['./postos-ccr.page.scss'],
})
export class PostosCcrPage extends Utils implements OnInit {

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit() {
  }
}
