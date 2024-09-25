import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Webhook } from 'svix';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './src/lib/userModel.js';


dotenv.config();
console.log(process.env.MONGODB_URL);

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const app = express();

app.use(cors({ origin: '*' }));




const port = process.env.PORT || 5000;

app.listen(port, () => {
console.log(`Listening on port http://localhost:${port}`);
});