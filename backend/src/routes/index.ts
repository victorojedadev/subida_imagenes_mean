import { Router } from 'express'

const router = Router();

import { createPhoto, getPhotos, getPhoto, deletePhoto, updatePhoto } from '../controllers/photo.controller'

import multer from '../libs/multer'

router.route('/fotos')
    .get(getPhotos)
    .post(multer.single('image'), createPhoto)

router.route('/fotos/:id')
    .get(getPhoto)
    .delete(deletePhoto)
    .put(updatePhoto)

export default router;

