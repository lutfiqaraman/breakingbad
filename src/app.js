import express from 'express';

const app = express();

// Render home page
app.get('/', (req, res) => {
    res.send('here you go ...');
});

// Run a nodejs Server
app.listen(3000, () => {
    console.log('server is running');
});
