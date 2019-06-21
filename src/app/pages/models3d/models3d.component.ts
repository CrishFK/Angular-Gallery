import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-models3d',
  templateUrl: './models3d.component.html',
  styleUrls: ['./models3d.component.scss']
})
export class Models3dComponent implements OnInit {

  galleryOptions: Array<any> = [];

  galleryImages: any;

  constructor(private gallery: GalleryService) { }

  ngOnInit() {
    this.galleryOptions.push(this.gallery.galleryOptions);
    this.gallery.defineGalleryImages('models3d.json', 'models3d/').subscribe((images) => this.galleryImages = images);
  }

}
