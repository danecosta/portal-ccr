import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { Utils } from '../utils';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.page.html',
  styleUrls: ['./prontuario.page.scss'],
})
export class ProntuarioPage extends Utils implements OnInit {

  usuario: Usuario = new Usuario();
  consultas: any[];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit() {
    this.buscarConsultas();
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
