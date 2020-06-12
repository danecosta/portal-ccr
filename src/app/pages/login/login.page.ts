import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth/';
import { auth } from 'firebase';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public form: FormGroup;

  constructor(private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth) {

    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {
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
        console.log(err);
        loading.dismiss();
        this.showMessage('Usuário ou senha inválidos');
      });
  }

  async signInWithGoogle() {
    this.fbAuth.signInWithPopup(new auth.GoogleAuthProvider())
      .then((data) => {
        console.log(data);
        localStorage.setItem('portalccr.user', JSON.stringify(new Usuario(data.user.displayName, data.user.email, data.user.photoURL)));
        this.navCtrl.navigateRoot('home');
      })
      .catch((err) => {
        console.log(err);
        this.showMessage('Usuário ou senha inválidos');
      });
  }

  async showMessage(message: string) {
    const toast = await this.toastCtrl.create({ message, duration: 3000, position: 'top' });
    toast.present;
  }

  async goToSignup() {
    this.navCtrl.navigateForward('signup');
  }

}
