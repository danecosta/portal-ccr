
import { InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx';
import { LoadingController, AlertController } from '@ionic/angular';

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

    constructor(public loadingCtrl: LoadingController,
        public alertCtrl: AlertController) { }

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

    public existeObjetoJson(text: string): boolean {
        return text.indexOf('{') >= 0 && text.indexOf('}') >= 0;
    }
}
