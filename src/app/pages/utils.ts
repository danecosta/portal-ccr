
import { InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { LoadingController, AlertController, NavController, MenuController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';

export class Utils {

    loader: LoadingController;
    alert: AlertController;

    options: InAppBrowserOptions = {
        location: 'no', // Or 'yes'
        hidden: 'no', // Or  'yes'
        clearcache: 'yes',
        clearsessioncache: 'yes',
        zoom: 'yes', // Android only ,shows browser zoom controls
        hardwareback: 'yes',
        mediaPlaybackRequiresUserAction: 'no',
        shouldPauseOnSuspend: 'no', // Android only
        closebuttoncaption: 'Close', // iOS only
        disallowoverscroll: 'no', // iOS only
        toolbar: 'yes', // iOS only
        enableViewportScale: 'no', // iOS only
        allowInlineMediaPlayback: 'no', // iOS only
        presentationstyle: 'pagesheet', // iOS only
        fullscreen: 'yes', // Windows only
    };

    private menuAberto = false;

    constructor(public loadingCtrl: LoadingController,
        public alertCtrl: AlertController,
        public navCtrl: NavController,
        public menuCtrl: MenuController) { }

    async iniciarLoader() {
        const loading = await this.loadingCtrl.create({
            cssClass: 'loading',
            message: 'Carregando...',
            duration: 2000
        });
        await loading.present();;
    }

    public encerrarLoader() {
        this.loader.dismiss();
    }

    async exibirMensagem(titulo: string, subTitulo: string) {
        const alert = await this.alertCtrl.create({
            cssClass: 'my-custom-class',
            header: titulo,
            subHeader: '',
            message: subTitulo,
            buttons: ['OK']
        });

        await alert.present();
    }

    public irPara(paginaDestino) {
        this.navCtrl.navigateForward(paginaDestino);
    }

    public moverMenu() {
        if (!this.menuAberto) {
            this.abrirMenu();
        } else {
            this.fecharMenu();
        }

        this.menuAberto = !this.menuAberto;
    }

    public abrirMenu() {
        this.menuCtrl.open('end');
        this.menuAberto = true;
    }

    public fecharMenu() {
        this.menuCtrl.close('end');
        this.menuAberto = false;
    }

    public existeObjetoJson(text: string): boolean {
        return text.indexOf('{') >= 0 && text.indexOf('}') >= 0;
    }
}
