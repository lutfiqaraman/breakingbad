const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Breaking bad!');
});

app.listen(port, () => {
    process.stdout.write('Server is up on port ' + port);
});
