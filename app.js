import dotenv from 'dotenv';
import express from "express";
import exphbs from 'express-handlebars';
import path from 'path';



dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000



import pages from './routes/pages.js';



app.use(express.static('public'));
app.use(express.static('node_modules/bootstrap/dist/css/'));
app.use(express.static('node_modules/bootstrap/dist/js/'));
app.use(express.static('node_modules/boxicons/css/'))
app.use(express.static('node_modules/boxicons/css/'))


app.engine('hbs', exphbs.engine({ 
    extname : 'hbs',
    layoutsDir: 'views/layouts',
    partialsDir: 'views/partials',
    defaultLayout: 'main'}));
app.set('view engine', 'hbs');
app.set('views', 'views');



app.use(pages);


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})