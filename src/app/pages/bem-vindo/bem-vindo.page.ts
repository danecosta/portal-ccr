import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.page.html',
  styleUrls: ['./bem-vindo.page.scss'],
})
export class BemVindoPage implements OnInit {

  usuario: string;

  constructor(public navCtrl: NavController,
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.usuario = params['usuario'];
    });

    setTimeout(() => {
      this.navCtrl.navigateRoot('home');
    }, 2000);
  }

}
