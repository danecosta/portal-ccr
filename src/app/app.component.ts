import { Component, ViewChild } from '@angular/core';

import { Platform, NavController, LoadingController, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { LoginPage } from './pages/login/login.page';
import { AngularFireAuth } from '@angular/fire/auth/';
import { Utils } from './pages/utils';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent extends Utils {

  constructor(private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private fbAuth: AngularFireAuth,
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl)
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }

  sair() {
    this.fecharMenu();
    this.fbAuth.signOut().then(
      data => {
        this.navCtrl.navigateRoot('login');
      }
    );
  }
}
