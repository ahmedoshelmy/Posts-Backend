import express from 'express';

import cors from 'cors';
// import globalErrorHandler from './controllers/errorController';

const app = express();

app.use(cors());

// app.use('/api/v1/auth', authRouter);

// app.use(globalErrorHandler);

export default app;
