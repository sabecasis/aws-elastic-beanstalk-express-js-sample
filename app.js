const express = require('express');
const app = express();
const port = 8090;

app.get('/', (req, res) => res.send('Hello World Sabri!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
