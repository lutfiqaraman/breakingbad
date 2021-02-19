import express from 'express';
import path from 'path';
import aboutRouter from '../routes/about.route.js';
import homeRouter  from '../routes/home.route.js';
import helpRouter from '../routes/help.route.js';
import contactRouter from '../routes/contact.route.js';
import characterRouter  from '../routes/character.route.js';

const app = express();

// Setup pugs engine and views location
const dirname = path.resolve();

app.set('view engine', 'pug');
app.set('views', dirname + '/views');


// Setup static directory to serve
const pathOfPublicDirectory = path.join(dirname, '/public');
app.use(express.static(pathOfPublicDirectory));

// Render Home Page
app.use('/', homeRouter);

// Render About Page
app.use('/about', aboutRouter);

// Render Help Page
app.use('/help', helpRouter);

// Render Contact Page
app.use('/contact', contactRouter);

// Use Character Page
app.use('/character', characterRouter);

// Run a NodeJS Server
app.listen(3000, () => {
    console.log('server is running');
});
