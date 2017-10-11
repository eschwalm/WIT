import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';

import router from './router';
import db from './config/db';

const app = express();

mongoose.connect(db.url, {
  useMongoClient: true
});

mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

app.use('/api', router);

// const port = process.env.PORT || 3000;


const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
