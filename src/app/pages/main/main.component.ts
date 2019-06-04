import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  galleryOptions: any;
  galleryImages: any;
  constructor(private service: GalleryService) { }

  ngOnInit() {
    this.galleryOptions = this.service.defineGalleryOptions();
    this.galleryImages = this.service.defineGalleryImages();
  }

}
