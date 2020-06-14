import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ActivatedRoute, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {

  usuario: Usuario = new Usuario();
  base64Image: string;

  options: CameraOptions = {
    quality: 100,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    correctOrientation: true,
    targetWidth: 1000,
    targetHeight: 1000,
  };

  constructor(private camera: Camera,
    private route: ActivatedRoute,
    public navCtrl: NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.usuario.email = params['usuario_email'];
    });
  }

  abrirCamera() {
    this.camera.getPicture({
      destinationType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      allowEdit: true,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      this.base64Image = `data:image/jpg;base64,${imageData}`;
      this.usuario.foto = this.base64Image;
      this.retornarParaPerfil();
    }, (err) => {
      console.log(err);
    });
  }

  abrirGaleria() {
    this.camera.getPicture(this.options)
      .then((imageData) => {
        this.base64Image = `data:image/jpg;base64,${imageData}`;
        this.usuario.foto = this.base64Image;
        this.retornarParaPerfil();
      }, (err) => {
        console.log(err);
      });
  }

  retornarParaPerfil() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        usuario_foto: this.usuario.foto
      }
    };
    this.navCtrl.navigateForward('perfil', navigationExtras);
  }

}
