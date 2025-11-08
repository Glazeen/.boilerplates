import express, { type Express } from 'express';
import cors from 'cors';
import apiRoutes from './api';
import { notFound, errorHandler } from './middleware';

const app: Express = express();

// Global middlewares
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/v1', apiRoutes);

// 404 and error handlers
app.use(notFound);
app.use(errorHandler);

export default app;