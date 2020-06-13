import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth/';
import { Usuario } from 'src/app/models/usuario.model';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  public form: FormGroup;
  usuario: Usuario = new Usuario();
  base64Image: any;

  constructor(private fb: FormBuilder,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth) {

    this.form = this.fb.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      whatsapp: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      bairro: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  abrirGaleria() { }

  abrirCamera() { }

  atualizarUsuario() { }

  cancelar() {
    this.navCtrl.back();
  }

  irPara(paginaDestino) {
    this.navCtrl.navigateForward(paginaDestino);
  }

}
