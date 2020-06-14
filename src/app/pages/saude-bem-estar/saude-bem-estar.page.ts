import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Utils } from '../utils';

@Component({
  selector: 'app-saude-bem-estar',
  templateUrl: './saude-bem-estar.page.html',
  styleUrls: ['./saude-bem-estar.page.scss'],
})
export class SaudeBemEstarPage extends Utils implements OnInit {

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit() {
  }
}
