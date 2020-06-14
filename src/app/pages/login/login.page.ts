import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController, ModalController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth/';
import { auth } from 'firebase';
import { Usuario } from 'src/app/models/usuario.model';
import { NavigationExtras } from '@angular/router';
import { CadastroPage } from '../modal-cadastro/cadastro.page';
import { Utils } from '../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends Utils implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth,
    public modalCtrl: ModalController) {
    super(loadingCtrl, alertCtrl, navCtrl);

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.sessionVerify();
  }

  private sessionVerify() {
    this.fbAuth.authState.subscribe((retorno) => {
      if (retorno) {
        const navigationExtras: NavigationExtras = {
          queryParams: {
            usuario: retorno.email
          }
        };
        this.navCtrl.navigateForward('bem-vindo', navigationExtras);
      }
    });
  }

  async submit() {
    const loading = await this.loadingCtrl.create({ message: 'Autenticando...' });
    loading.present();

    this.fbAuth.signInWithEmailAndPassword(this.form.controls.email.value, this.form.controls.password.value)
      .then((data) => {
        loading.dismiss();
        localStorage.setItem('portalccr.user', JSON.stringify(new Usuario('', data.user.email, '')));
        this.navCtrl.navigateRoot('home');
      })
      .catch((err) => {
        loading.dismiss();
        this.presentModal();
      });
  }

  async signInWithGoogle() {
    this.fbAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((data) => {
        localStorage.setItem('portalccr.user', JSON.stringify(new Usuario(data.user.displayName, data.user.email, data.user.photoURL)));
        this.navCtrl.navigateRoot('home');
      })
      .catch((err) => {
        this.showMessage('Usuário ou senha inválidos');
      });
  }

  async signInWithFacebook() {
    this.fbAuth.signInWithPopup(new auth.FacebookAuthProvider())
      .then((data) => {
        localStorage.setItem('portalccr.user', JSON.stringify(new Usuario(data.user.displayName, data.user.email, data.user.photoURL)));
        this.navCtrl.navigateRoot('home');
      })
      .catch((err) => {
        this.showMessage('Usuário ou senha inválidos');
      });
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: CadastroPage,
      cssClass: 'my-custom-class',
      componentProps: {
        email: this.form.controls.email.value,
        senha: this.form.controls.password.value,
      }
    });
    return await modal.present();
  }

  async showMessage(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 3000, position: 'top' });
    toast.present;
  }

}
