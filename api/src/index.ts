import path from 'node:path';
import express from 'express';
import mongoose from 'mongoose';

import { router } from './router';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    console.log('Connected to mongoDB');

    const app = express();

    const PORT = 3001;

    app.use(
      '/uploads',
      express.static(path.resolve(__dirname, '..', 'uploads'))
    );

    app.use(express.json());
    app.use(router);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(() => console.log('Erro na conexão'));
