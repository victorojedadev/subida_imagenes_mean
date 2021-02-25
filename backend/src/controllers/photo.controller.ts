import { Request, Response } from 'express'

export function getPhotos(req: Request, res: Response) {
}


export function createPhoto(req: Request, res: Response) {
    return res.json({
        message: 'Foto creada exitosamente'
    })
}