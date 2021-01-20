import express from 'express';
import path from 'path';
import pug from 'pug';

const app = express();

//Setup pugs engine and views location
const dirname = path.resolve();
app.set('views', dirname + '/views');
app.set('view engine', 'pug');

// Render home page
app.get('/', (req, res) => {
    res.render('index', {title: 'Home Page', message: 'Breakingbad App'});
});

// Run a nodejs Server
app.listen(3000, () => {
    console.log(dirname);
    console.log('server is running');
});
