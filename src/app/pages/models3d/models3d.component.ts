import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-models3d',
  templateUrl: './models3d.component.html',
  styleUrls: ['./models3d.component.scss']
})
export class Models3dComponent implements OnInit {

  galleryOptions: any;
  galleryImages: any;

  constructor(private service: GalleryService) { }

  ngOnInit() {
    this.galleryOptions = this.service.defineGalleryOptions();
    this.galleryImages = this.service.defineGalleryImages();
  }

}
