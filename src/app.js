import express from 'express';
import path from 'path';
import aboutRouter from '../routes/about.routes.js';

const app = express();

// Setup pugs engine and views location
const dirname = path.resolve();
app.set('views', dirname + '/views');
app.set('view engine', 'pug');

// Setup static directory to serve
const pathOfPublicDirectory = path.join(dirname, '/public');
app.use(express.static(pathOfPublicDirectory));

// Render home page
app.get('/', (req, res) => {
    res.render('index', {title: 'Home Page', message: 'Breaking Bad App'});
});

app.use('/about', aboutRouter);

// Run a NodeJS Server
app.listen(3000, () => {
    console.log('server is running');
});
