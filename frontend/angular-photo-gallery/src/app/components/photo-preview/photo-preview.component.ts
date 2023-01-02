import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/interfaces/Photo';
import { NgxSpinnerService } from 'ngx-spinner';
import { takeWhile, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.css']
})
export class PhotoPreviewComponent implements OnInit {

  id: string;
  photo: Photo;

  constructor(
    private router: Router,
    private activateRoute: ActivatedRoute,
    private photoService: PhotoService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.activateRoute.params.subscribe(params => {
      this.id = params['id'];
      this.photoService.getPhoto(this.id)
        .subscribe(
          res => {
            this.spinner.hide();
            this.photo = res;
          },
          err => {
            this.spinner.hide();
            console.log(err)
          }
        );
    });
  }

  deletePhoto(id: string) {
    this.spinner.show();
    this.photoService.deletePhoto(id)
      .subscribe(res => {
        this.spinner.hide();
        this.router.navigate(['/fotos']);
      }, err => {
        console.log(err);
        this.spinner.hide();
      })
  }

  updatePhoto(title: HTMLInputElement, description: HTMLInputElement): boolean {
    this.spinner.show();
    this.photoService.updatePhoto(this.id, title.value, description.value)
      .subscribe(res => {
        this.spinner.hide();
        this.router.navigate(['/fotos']);
      }, err => {
        console.log(err);
        this.spinner.hide();
      });
    return false;
  }

}
