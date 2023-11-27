import express from 'express';
import cors from 'cors';

import authRouter from './routes/auth';

const app = express();

app.use(cors());
app.use(express.json());

// Versioning for the API can be added later
app.use('/auth', authRouter);

export default app;
