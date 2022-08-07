import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import rankRouter from './routers/rankRouter.js';
import userRouter from './routers/userRouter.js';
import urlRouter from './routers/urlRouter.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(rankRouter);
app.use(userRouter);
app.use(urlRouter);

app.listen(process.env.PORT || 5000);