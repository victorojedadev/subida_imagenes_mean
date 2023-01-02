import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  file: File;
  photoSelected: string | ArrayBuffer;
  @ViewChild('title', { static: false }) title;
  @ViewChild('descripcion', { static: false }) description;

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private zone: NgZone
  ) {

  }

  ngOnInit() {
  }

  onPhotoSelected(event: HtmlInputEvent): void {
    if (event.target.files && event.target.files[0]) {
      this.file = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => this.photoSelected = reader.result
      reader.readAsDataURL(this.file);

    }
  }

  uploadPhoto(title: HTMLInputElement, description: HTMLInputElement): Boolean {
    this.spinner.show();
    this.photoService.createPhoto(title.value, description.value, this.file)
      .subscribe(
        res => {
          this.spinner.hide();
          this.resetForm();
          this.zone.run(() => {
            this.router.navigate(['/fotos']);
          });
        },
        err => {
          this.spinner.hide();
          console.log(err)
        }
      );
    return false;
  }

  resetForm() {
    this.photoSelected = null;
    this.title = '';
    this.description = '';
  }

}
