import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth/';
import { Usuario } from 'src/app/models/usuario.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  form: FormGroup;
  @Input() email: string;
  @Input() senha: string;

  constructor(public modalController: ModalController,
    private fbAuth: AngularFireAuth,
    private navCtrl: NavController,
    private loadingCtrl: LoadingController) { }


  ngOnInit(): void {
  }

  async cadastrarUsuario() {
    const loading = await this.loadingCtrl.create({ message: 'Autenticando...' });
    loading.present();

    this.fbAuth.createUserWithEmailAndPassword(this.email, this.senha)
      .then((data) => {
        loading.dismiss();
        localStorage.setItem('portalccr.user', JSON.stringify(new Usuario('', data.user.email, '')));
        this.navCtrl.navigateRoot('bem-vindo');
        this.modalController.dismiss({
          dismissed: true
        });
      })
      .catch((err) => {
        loading.dismiss();
      });
  }

  cancelar() {
    this.modalController.dismiss({
      dismissed: true
    });
    this.navCtrl.navigateRoot('login');
  }

}
