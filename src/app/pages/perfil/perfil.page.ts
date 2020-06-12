import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth/';

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
    });
  }

  ngOnInit() {
  }

  abrirGaleria() { }

  abrirCamera() { }

  atualizarUsuario() { }

  cancelar() { }

}
