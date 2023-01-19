import Router from 'express';
import * as controller from '../controller/user-controller.js';

const app = Router();

app.get('/list', controller.getUsers)
app.post('/register', controller.postUser)
app.delete('/delete/:id', controller.deleteUser);

export default app;