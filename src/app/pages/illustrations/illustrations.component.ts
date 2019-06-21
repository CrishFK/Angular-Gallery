import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../gallery.service';

@Component({
  selector: 'app-illustrations',
  templateUrl: './illustrations.component.html',
  styleUrls: ['./illustrations.component.scss']
})
export class IllustrationsComponent implements OnInit {

  galleryOptions: Array<any> = [];

  galleryImages: any;

  constructor(private gallery: GalleryService) { }

  ngOnInit() {
    this.galleryOptions.push(this.gallery.galleryOptions);
    this.gallery.defineGalleryImages('illustrations.json', 'illustrations/').subscribe((images) => this.galleryImages = images);
  }

}
