const express = require('express');
const app = express();
const port = 3000;

//Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/health', (req, res) => {
    res.status(200).send('OK');
    }
);

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

const close = () => {
    server.close();
}

module.exports = { app, close };