import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, MenuController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { Utils } from '../utils';
import { AngularFirestore } from '@angular/fire/firestore/';
import { AngularFireAuth } from '@angular/fire/auth/';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.page.html',
  styleUrls: ['./prontuario.page.scss'],
})
export class ProntuarioPage extends Utils implements OnInit {

  usuario: Usuario = new Usuario();
  consultas: any[];

  constructor(public loadingCtrl: LoadingController,
    public angularFirestore: AngularFirestore,
    public alertCtrl: AlertController,
    public navCtrl: NavController,
    private fbAuth: AngularFireAuth,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit() {
    this.buscarConsultas();
  }

  ionViewWillEnter() {
    this.sessionVerify();
  }

  async sessionVerify() {
    this.fbAuth.authState.subscribe((retorno) => {
      if (retorno) {
        this.usuario.email = retorno.email;
        this.obterDadosUsuarioLogado();
      }
    });
  }

  obterDadosUsuarioLogado() {
    const perfil = this.angularFirestore.collection('profile');
    perfil.ref.where(`email`, '==', this.usuario.email).get().then(x => {
      x.forEach(doc => {
        this.usuario.id = doc.id;
        this.usuario.nome = doc.data().nome;
        this.usuario.cpf = doc.data().cpf;
        this.usuario.cep = doc.data().cep;
        this.usuario.cidade = doc.data().cidade;
        this.usuario.foto = doc.data().foto;
        this.usuario.dataNascimento = doc.data().dataNascimento;
        this.usuario.complemento = doc.data().complemento;
        this.usuario.estado = doc.data().estado;
        this.usuario.logradouro = doc.data().logradouro;
        this.usuario.whatsapp = doc.data().whatsapp;
        this.usuario.bairro = doc.data().bairro;
      });
    }).then();
  }

  buscarConsultas() {
    // Consultas deverão vir do banco quando houver integração com o portal
    this.consultas = [
      { data: '22/05/2020', hora: '13:00', unidade: 'ViaSul', queixaPrincipal: 'Dor nas costas' },
      { data: '03/04/2020', hora: '18:20', unidade: 'CCR RodoAnel', queixaPrincipal: 'Dor nas pernas' },
      { data: '15/03/2020', hora: '14:30', unidade: 'ViaRio', queixaPrincipal: 'Ansiedade' },
      { data: '13/03/2020', hora: '09:40', unidade: 'ViaRio', queixaPrincipal: 'Pressão alta' },
    ];
  }
}
