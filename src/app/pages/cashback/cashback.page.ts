import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Utils } from '../utils';
import { AlertController, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-cashback',
  templateUrl: './cashback.page.html',
  styleUrls: ['./cashback.page.scss'],
})
export class CashbackPage extends Utils implements OnInit {

  scannedCode = null;
  leituras: any[] = [];
  cashbackLido: any;
  tipoCashback: any;
  tiposCashback: any[] = [
    { tipoCashback: 'a179aa0c-3802-4653-88f1-e8e7ce6c9037', descricao: 'Cadastro efetivado com sucesso!', valor: 50 },
    { tipoCashback: '832eb07e-0338-4e28-9617-1bd87ebd64a7', descricao: 'Consulta médica no posto CCR', valor: 100 },
    { tipoCashback: 'ec5b0505-5194-46bc-8a94-7902fc168654', descricao: 'Banho', valor: -40 },
    { tipoCashback: '3c9fd4f3-e7bf-42ed-9edf-b5d094a83e08', descricao: 'Limpeza do caminhão', valor: -80 },
  ];
  pontuacaoAtual = 0;

  constructor(private barcodeScanner: BarcodeScanner,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl, navCtrl);
  }

  ngOnInit() {
    // Obter leituras e pontuacao atual do caminhoneiro
    this.leituras = [
      { tipoCashback: 'a179aa0c-3802-4653-88f1-e8e7ce6c9037', descricao: 'Cadastro efetivado com sucesso!', valor: 50 },
    ];

    this.leituras.forEach(item => {
      this.pontuacaoAtual += item.valor;
    });
  }

  lerQRCode() {
    this.barcodeScanner.scan().then(
      scan => {
        this.scannedCode = scan.text;
        this.cashbackLido = JSON.parse(this.scannedCode);
        if (this.cashbackLido && this.cashbackLido.tipoCashback) {
          this.tipoCashback = this.tiposCashback.find(x => x.tipoCashback === this.cashbackLido.tipoCashback);
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
    const verificacaoSaldo = this.pontuacaoAtual + this.tipoCashback.valor;
    if (verificacaoSaldo >= 0) {
      this.leituras.unshift(this.tipoCashback);
      this.leituras = this.leituras.slice(0, 4);
      this.pontuacaoAtual += this.tipoCashback.valor;

      // Persistir nova leitura
    } else {
      this.exibirMensagem('Ops!', 'Você não possui saldo suficiente para essa ação.');
    }

  }
}
