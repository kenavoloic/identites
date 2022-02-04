import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


import express from 'express';
import favicon from 'express-favicon';
import serveIndex from 'serve-index';
import routeur from './routeur.js';

const port = process.env.PORT || 9999;
const application = express();

application.use('/listes', express.static(path.resolve(__dirname,'public', 'listes')),  serveIndex(path.resolve(__dirname,'public', 'listes'), {'icons': true}));

application.use(express.static(path.resolve(__dirname, '..', 'public')));




application.set('view engine', 'ejs');
application.set('views', path.join(__dirname, 'vues'));

application.use(favicon(path.resolve(__dirname, '..', 'public', 'images', 'favicon.ico')));

application.use(express.urlencoded({extended: true}));

application.use('/', routeur);
application.listen(port, () => {
    console.log('... ... ...');
});
