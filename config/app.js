import express from 'express';
import routes from '../router/router.js'

export const app = express();

app.use('/', express.static('./public/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use('/*', (req, res) => {
    res.sendFile('index.html', { root: './public/static' });
})
