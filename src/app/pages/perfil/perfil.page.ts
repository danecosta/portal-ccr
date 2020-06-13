import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth/';
import { Usuario } from 'src/app/models/usuario.model';
import * as cep from 'cep-promise';
import { Utils } from '../utils';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends Utils implements OnInit {

  public form: FormGroup;
  usuario: Usuario = new Usuario();
  base64Image: any;

  constructor(private fb: FormBuilder,
    public loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth,
    public alertCtrl: AlertController) {
    super(loadingCtrl, alertCtrl);

    this.form = this.fb.group({
      cpf: ['', Validators.required],
      nome: ['', Validators.required],
      email: ['', Validators.required],
      whatsapp: ['', Validators.required],
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
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

  async pesquisarCep() {
    this.usuario.cep = this.form.get('cep').value;
    this.usuario.cep = this.usuario.cep.replace('.', '').replace('-', '');
    await cep(this.usuario.cep).then(
      data => {
        this.preencherForm(data);
      }
    ).catch(
      error => {
        this.exibirMensagem('Ops!', 'O CEP informado não é válido!');
      });

  }

  preencherForm(dadosCep) {
    this.form.get('logradouro').setValue(dadosCep.street);
    this.form.get('bairro').setValue(dadosCep.neighborhood);
    this.form.get('cidade').setValue(dadosCep.city);
    this.form.get('estado').setValue(dadosCep.state);
  }

  cancelar() {
    this.navCtrl.back();
  }

  irPara(paginaDestino) {
    this.navCtrl.navigateForward(paginaDestino);
  }

}
