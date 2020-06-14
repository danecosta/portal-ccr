import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

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

  constructor(private camera: Camera) { }

  ngOnInit() {
  }

  abrirCamera() {
    this.camera.getPicture({
      destinationType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      allowEdit: true,
      targetWidth: 1000,
      targetHeight: 1000
    }).then((imageData) => {
      this.base64Image = `data:image/png;base64,${imageData}`;
      this.usuario.foto = this.base64Image;
    }, (err) => {
      console.log(err);
    });
  }

  abrirGaleria() {
    this.camera.getPicture(this.options)
      .then((imageData) => {
        this.base64Image = `data:image/png;base64,${imageData}`;
        this.usuario.foto = this.base64Image;
      }, (err) => {
        console.log(err);
      });
  }

}
