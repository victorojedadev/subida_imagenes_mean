import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos = [];

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.photoService.getPhotos()
      .subscribe(
        res => {
          this.photos = res;
          this.spinner.hide();
        },
        err => {
          console.log(err)
          this.spinner.hide();
        }
      );
  }

  selectedCard(id: string) {
    this.router.navigate(['/fotos', id]);
  }

}
