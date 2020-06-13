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
  leituras: string[] = [];
  cashbackLido: any;
  tipoCashback: any;
  tiposCashback: any[] = [
    { tipoCashback: 'a179aa0c-3802-4653-88f1-e8e7ce6c9037', descricao: 'Cadastro', valor: 50 },
    { tipoCashback: '832eb07e-0338-4e28-9617-1bd87ebd64a7', descricao: 'Consulta médica', valor: 100 },
    { tipoCashback: 'ec5b0505-5194-46bc-8a94-7902fc168654', descricao: 'Banho', valor: -40 },
  ];
  pontuacaoAtual = 1;

  constructor(private barcodeScanner: BarcodeScanner,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public navCtrl: NavController) {
    super(loadingCtrl, alertCtrl);
  }

  ngOnInit() {
    //Obter leituras do caminhoneiro
  }

  lerQRCode() {
    this.barcodeScanner.scan().then(
      scan => {
        this.scannedCode = scan.text;
        this.exibirMensagem('Scan!', scan.text);
        if (this.existeObjetoJson(this.scannedCode)) {
          this.cashbackLido = JSON.parse(this.scannedCode);
          this.exibirMensagem('Scanned!', this.scannedCode);
          this.exibirMensagem('Lido!', this.cashbackLido);
          if (this.cashbackLido && this.cashbackLido.tipoCashback) {
            this.tipoCashback = this.tipoCashback.filter(x => x.tipoCashback == this.cashbackLido.tipoCashback);
            this.exibirMensagem('Tipo!', this.tipoCashback);

          } else {
            this.exibirMensagem('Ops!', 'O QR não é compatível com o aplicativo.');
          }
        } else {
          if (scan.text) {
            this.incluirLeituraLista();
          }
        }
      }).catch(
        error => {
        }
      );
  }

  visualizarHistorico() {

  }

  public existeObjetoJson(text: string): boolean {
    return text.indexOf('{') >= 0 && text.indexOf('}') >= 0;
  }

  incluirLeituraLista() {
    this.leituras.unshift(this.scannedCode);
    this.exibirMensagem('leituras!', JSON.stringify(this.leituras));
    // Persistir nova leitura
  }

  irPara(paginaDestino) {
    this.navCtrl.navigateForward(paginaDestino);
  }

}
