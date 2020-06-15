import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Utils } from '../utils';
import { AlertController, LoadingController, NavController, ToastController, MenuController } from '@ionic/angular';
import { Usuario } from 'src/app/models/usuario.model';
import { AngularFireAuth } from '@angular/fire/auth/';
import { AngularFirestore } from '@angular/fire/firestore/';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.page.html',
  styleUrls: ['./cashback.page.scss'],
})
export class CashbackPage extends Utils implements OnInit {

  scannedCode = null;
  leituras: any[] = [];
  cashbackLido: any;
  novaLeitura: any;
  tiposCashback: any[] = [
    { tipoCashback: 'a179aa0c-3802-4653-88f1-e8e7ce6c9037', descricao: 'Cadastro efetivado com sucesso!', valor: 50 },
    { tipoCashback: '832eb07e-0338-4e28-9617-1bd87ebd64a7', descricao: 'Consulta médica no posto CCR', valor: 100 },
    { tipoCashback: 'ec5b0505-5194-46bc-8a94-7902fc168654', descricao: 'Banho', valor: -40 },
    { tipoCashback: '3c9fd4f3-e7bf-42ed-9edf-b5d094a83e08', descricao: 'Limpeza do caminhão', valor: -80 },
  ];
  pontuacaoAtual = 0;
  usuario: Usuario = new Usuario();

  constructor(private barcodeScanner: BarcodeScanner,
    public loadingCtrl: LoadingController,
    public toasterCtrl: ToastController,
    public alertCtrl: AlertController,
    public angularFirestore: AngularFirestore,
    private fbAuth: AngularFireAuth,
    public navCtrl: NavController,
    public menuCtrl: MenuController) {
    super(loadingCtrl, alertCtrl, navCtrl, menuCtrl);
  }

  ngOnInit() { }

  ionViewWillEnter() {
    this.sessionVerify().then(() => {
      this.obterLeiturasIniciais();
      this.obterLeiturasUsuario();
    });
  }

  async sessionVerify() {
    this.fbAuth.authState.subscribe((retorno) => {
      if (retorno) {
        this.usuario.email = retorno.email;
      }
    });
  }

  private obterLeiturasIniciais() {
    this.leituras = [];
    this.leituras = [
      { tipoCashback: 'a179aa0c-3802-4653-88f1-e8e7ce6c9037', descricao: 'Cadastro efetivado com sucesso!', valor: 50, data: new Date() },
    ];

    this.leituras.forEach(item => {
      this.pontuacaoAtual += item.valor;
    });
  }

  obterLeiturasUsuario() {
    this.pontuacaoAtual = 0;
    const profileRef = this.angularFirestore.collection('leitura');
    profileRef.ref.where(`email`, '==', this.usuario.email).get().then(x => {
      x.forEach(doc => {
        this.leituras.push({
          valor: doc.data().valor,
          descricao: doc.data().descricao
        });
      });
    }).then(() => {
      this.calcularPontuacaoAtual();
    });
  }

  calcularPontuacaoAtual() {
    this.pontuacaoAtual = 0;
    this.leituras.forEach(leitura => {
      this.pontuacaoAtual += leitura.valor;
    });
  }


  lerQRCode() {
    this.barcodeScanner.scan().then(
      scan => {
        this.scannedCode = scan.text;
        this.cashbackLido = JSON.parse(this.scannedCode);
        if (this.cashbackLido && this.cashbackLido.tipoCashback) {
          this.novaLeitura = this.tiposCashback.find(x => x.tipoCashback === this.cashbackLido.tipoCashback);
          this.incluirLeituraLista();
        } else {
          this.exibirMensagem('Ops!', 'O QR não é compatível com o aplicativo.');
        }
      }).catch(
        error => {
        }
      );
  }

  visualizarHistorico() {

  }

  incluirLeituraLista() {
    const verificacaoSaldo = this.pontuacaoAtual + this.novaLeitura.valor;
    if (verificacaoSaldo >= 0) {
      this.leituras.unshift(this.novaLeitura);
      this.leituras = this.leituras.slice(0, 4);
      this.pontuacaoAtual += this.novaLeitura.valor;

      const novaLeituraId = this.angularFirestore.createId();
      const obj = {
        email: this.usuario.email,
        descricao: this.novaLeitura.descricao,
        tipoCashback: this.novaLeitura.tipoCashback,
        valor: this.novaLeitura.valor,
        data_leitura: new Date()
      };

      this.angularFirestore.doc(`leitura/${novaLeituraId}`).set(Object.assign({}, obj)).then(() => {
        this.exibirMensagem('Sucesso!', 'Leitura registrada com sucesso');
      }).catch((err) => {
        console.log(err);
      });
    } else {
      this.exibirMensagem('Ops!', 'Você não possui saldo suficiente para essa ação.');
    }

  }
}
