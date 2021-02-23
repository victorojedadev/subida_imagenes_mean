import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoFormComponent } from './components/photo-form/photo-form.component';
import { PhotoPreviewComponent } from './components/photo-preview/photo-preview.component';


const routes: Routes = [
  { path: 'fotos', component: PhotoListComponent },
  { path: 'fotos/nuevo', component: PhotoFormComponent },
  { path: 'fotos/:id', component: PhotoPreviewComponent },
  { path: '', redirectTo: '/fotos', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
