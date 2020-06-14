import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.page.html',
  styleUrls: ['./prontuario.page.scss'],
})
export class ProntuarioPage implements OnInit {

  usuario: Usuario = new Usuario();
  consultas: any[];

  constructor(public navCtrl: NavController) { }

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

  irPara(paginaDestino) {
    this.navCtrl.navigateForward(paginaDestino);
  }
}
