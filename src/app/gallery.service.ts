import { Injectable } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage } from 'ngx-gallery';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class GalleryService {

  exportGalleryImages: Observable<any>;

  galleryImages: NgxGalleryImage[] = [];

  galleryOptions: NgxGalleryOptions =
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
      thumbnailMargin: 5,
      thumbnailsMargin: 5,
    };

  constructor(private http: HttpClient) { }

  defineGalleryImages(url: string, directory: string): Observable<any> {
    this.http.get('../assets/' + url, { responseType: 'text' })
      .subscribe((data => {
        JSON.parse(data).forEach(nameImage => {
          if (nameImage.length != 0) {
            let strucDataGallery = { small: '', medium: '', big: '' }
            strucDataGallery.small = 'assets/' + directory + nameImage;
            strucDataGallery.medium = 'assets/' + directory + nameImage;
            strucDataGallery.big = 'assets/' + directory + nameImage;
            this.galleryImages.push(strucDataGallery);
          }
        });
      }));

    this.exportGalleryImages = new Observable((observer) => {
      observer.next(this.galleryImages);
      observer.complete();
    });
    return this.exportGalleryImages;
  }

}

