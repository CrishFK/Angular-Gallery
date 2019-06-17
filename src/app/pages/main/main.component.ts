import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  galleryOptions: Array<any> = [];

  galleryImages: any;

  constructor(private gallery: GalleryService) { }

  ngOnInit() {
    this.galleryOptions.push(this.gallery.galleryOptions);
    this.gallery.defineGalleryImages('main.json', 'main/').subscribe((images) => this.galleryImages = images);
  }

}
