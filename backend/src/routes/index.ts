import { Router } from 'express'

const router = Router();

import { createPhoto, getPhotos } from '../controllers/photo.controller'

router.route('/fotos')
    .post(createPhoto)
    .get(getPhotos)

export default router;

