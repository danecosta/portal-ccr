import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoadingController, NavController, ToastController, AlertController, MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth/';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from 'src/app/models/usuario.model';
import * as cep from 'cep-promise';
import { Utils } from '../utils';
import { NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage extends Utils implements OnInit {

  public form: FormGroup;
  usuario: Usuario = new Usuario();
  base64Image: any;

  customPickerOptions = {
    buttons: [{
      text: 'Cancelar',
      handler: () => { }
    },
    {
      text: 'Confirmar',
      handler: () => { }
    }]
  };


  constructor(private fb: FormBuilder,
    public angularFirestore: AngularFirestore,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private toastCtrl: ToastController,
    private fbAuth: AngularFireAuth,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);

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
      dataNascimento: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.sessionVerify();
    this.recuperarFotoUsuario();
  }

  private recuperarFotoUsuario() {
    this.route.queryParams.subscribe(params => {
      if (params.usuario_foto) {
        this.usuario.foto = params.usuario_foto;
      }
    });
  }

  async sessionVerify() {
    this.fbAuth.authState.subscribe((retorno) => {
      if (retorno) {
        this.usuario.email = retorno.email;
        this.form.get('email').setValue(this.usuario.email);
        this.obterDadosUsuarioLogado();
      }
    });
  }

  async obterDadosUsuarioLogado() {
    const profileRef = this.angularFirestore.collection('profile');
    profileRef.ref.where(`email`, '==', this.usuario.email).get().then(x => {
      x.forEach(doc => {
        this.usuario.id = doc.id;
        this.form.get('nome').setValue(doc.data().nome);
        this.form.get('cpf').setValue(doc.data().cpf);
        this.form.get('cep').setValue(doc.data().cep);
        this.form.get('cidade').setValue(doc.data().cidade);
        this.usuario.foto = doc.data().foto;
        this.form.get('dataNascimento').setValue(doc.data().dataNascimento);
        this.form.get('complemento').setValue(doc.data().complemento);
        this.form.get('estado').setValue(doc.data().estado);
        this.form.get('logradouro').setValue(doc.data().logradouro);
        this.form.get('whatsapp').setValue(doc.data().whatsapp);
        this.form.get('bairro').setValue(doc.data().bairro);
      });
    });
  }

  abrirModalEditarAvatar() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        usuario_email: this.usuario.email
      }
    };
    this.navCtrl.navigateForward('avatar', navigationExtras);
  }

  atualizarUsuario() {
    this.usuario.cpf = this.form.controls.cpf.value;
    this.usuario.complemento = this.form.controls.complemento.value;
    this.usuario.nome = this.form.controls.nome.value;
    this.usuario.cep = this.form.controls.cep.value;
    this.usuario.cidade = this.form.controls.cidade.value;
    this.usuario.estado = this.form.controls.estado.value;
    this.usuario.logradouro = this.form.controls.logradouro.value;
    this.usuario.whatsapp = this.form.controls.whatsapp.value;
    this.usuario.bairro = this.form.controls.bairro.value;
    this.usuario.dataNascimento = this.form.controls.dataNascimento.value;

    if (this.usuario.id) {
      this.angularFirestore.doc(`profile/${this.usuario.id}`).set(Object.assign({}, this.usuario), { merge: true }).then(() => {
        this.exibirMensagem('Sucesso!', 'Usuário atualizado com sucesso');
        this.navCtrl.navigateForward('home');
      });
    } else {
      const newUserProfile = this.angularFirestore.createId();
      this.angularFirestore.doc(`profile/${newUserProfile}`).set(Object.assign({}, this.usuario)).then(() => {
        this.exibirMensagem('Sucesso!', 'Usuário cadastrado com sucesso');
        this.navCtrl.navigateForward('home');
      });
    }
  }

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
}
