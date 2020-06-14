import { Component, OnInit } from '@angular/core';
import { Utils } from '../utils';
import { LoadingController, AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.page.html',
  styleUrls: ['./emergencia.page.scss'],
})
export class EmergenciaPage extends Utils implements OnInit {

  itens: any[] = [];

  constructor(public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit() {
    this.itens = [
      { descricao: 'ATENDIMENTO À MULHER', icone: 'call-outline', numero: '180', habilitado: true },
      { descricao: 'AUTO BAN', icone: 'call-outline', numero: '08000555550', habilitado: true },
      { descricao: 'BOMBEIRO', icone: 'call-outline', numero: '193', habilitado: true },
      { descricao: 'DEFESA CIVIL', icone: 'call-outline', numero: '199', habilitado: true },
      { descricao: 'DENUNCIA EXPLORAÇÃO SEXUAL INFANTIL', icone: 'call-outline', numero: '100', habilitado: true },
      { descricao: 'MSVIA', icone: 'call-outline', numero: '08006480163', habilitado: true },
      { descricao: 'NOVA DUTRA', icone: 'call-outline', numero: '08000173536', habilitado: true },
      { descricao: 'POLICIA MILITAR', icone: 'call-outline', numero: '190', habilitado: true },
      { descricao: 'POLICIA RODOVIARIA ESTADUAL', icone: 'call-outline', numero: '198', habilitado: true },
      { descricao: 'POLICIA RODOVIARIA FEDERAL', icone: 'call-outline', numero: '191', habilitado: true },
      { descricao: 'PREVENÇÃO AO SUICÍDIO', icone: 'call-outline', numero: '188', habilitado: true },
      { descricao: 'PROCON', icone: 'call-outline', numero: '151', habilitado: true },
      { descricao: 'RODONORTE', icone: 'call-outline', numero: '0800421500', habilitado: true },
      { descricao: 'SAMU', icone: 'call-outline', numero: '192', habilitado: true },
      { descricao: 'SP VIAS', icone: 'call-outline', numero: '08007035030', habilitado: true },
      { descricao: 'VIA OESTE', icone: 'call-outline', numero: '08007015555', habilitado: true },
      { descricao: 'VIA SUL', icone: 'call-outline', numero: '08000000290', habilitado: true },
    ];
  }
}
