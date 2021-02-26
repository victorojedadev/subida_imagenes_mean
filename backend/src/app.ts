import express from 'express';
import morgan from 'morgan';
import indexRoutes from './routes/index'
import path from 'path';
import cors from 'cors';

const app = express();

//settings 

app.set('port', process.env.PORT || 4000);

// Midlewars

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());


// routes
app.use('/api', indexRoutes);

// carpeta para archivos publicos
app.use('/uploads', express.static(path.resolve('uploads')));


export default app;