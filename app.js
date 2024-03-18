import express from 'express';
import userRouter from './routes/user.js';

const app = express();

app.use(express.static('public'));

app.use('/api/user', userRouter);

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => console.log('Server running'));
server.on('error', error => console.log(error))                                 