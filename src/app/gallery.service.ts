import { Injectable } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Injectable({
  providedIn: 'root'
})

export class GalleryService {

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  defineGalleryOptions(): any {
    this.galleryOptions = [
      {
        "previewFullscreen": true,
        "imageArrowsAutoHide": false,
        "imageAutoPlay": true,
        imageAutoPlayInterval: 6000,
        "imageAutoPlayPauseOnHover": true,
        "imageInfinityMove": true,
        width: '1000px',
        height: '700px',
        thumbnailsColumns: 3,
        thumbnailsRows: 3,
        thumbnailsPercent: 40,
        imagePercent: 60,
        thumbnailMargin: 2,
        thumbnailsMargin: 2
      },
    ];
    return this.galleryOptions;
  }

  defineGalleryImages(): any {
    this.galleryImages = [
      {
        small: 'assets/1.jpg',
        medium: 'assets/1.jpg',
        big: 'assets/1.jpg'
      },
      {
        small: 'assets/2.jpg',
        medium: 'assets/2.jpg',
        big: 'assets/2.jpg'
      },
      {
        small: 'assets/3.jpg',
        medium: 'assets/3.jpg',
        big: 'assets/3.jpg'
      },
      {
        small: 'assets/4.jpg',
        medium: 'assets/4.jpg',
        big: 'assets/4.jpg'
      },
      {
        small: 'assets/5.jpg',
        medium: 'assets/5.jpg',
        big: 'assets/5.jpg'
      },
      {
        small: 'assets/6.jpg',
        medium: 'assets/6.jpg',
        big: 'assets/6.jpg'
      },
      {
        small: 'assets/7.jpg',
        medium: 'assets/7.jpg',
        big: 'assets/7.jpg'
      },
      {
        small: 'assets/8.jpg',
        medium: 'assets/8.jpg',
        big: 'assets/8.jpg'
      },
      {
        small: 'assets/9.jpg',
        medium: 'assets/9.jpg',
        big: 'assets/9.jpg'
      },
      {
        small: 'assets/10.jpg',
        medium: 'assets/10.jpg',
        big: 'assets/10.jpg'
      },
      {
        small: 'assets/11.jpg',
        medium: 'assets/11.jpg',
        big: 'assets/11.jpg'
      },
      {
        small: 'assets/12.jpg',
        medium: 'assets/12.jpg',
        big: 'assets/12.jpg'
      },

    ];
    return this.galleryImages;
  }

}

