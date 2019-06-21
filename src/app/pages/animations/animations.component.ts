import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss']
})
export class AnimationsComponent implements OnInit {

  galleryOptions: Array<any> = [];

  galleryImages: any;

  constructor(private gallery: GalleryService) { }

  ngOnInit() {
    this.galleryOptions.push(this.gallery.galleryOptions);
    this.gallery.defineGalleryImages('animations.json', 'animations/').subscribe((images) => this.galleryImages = images);
  }

}
