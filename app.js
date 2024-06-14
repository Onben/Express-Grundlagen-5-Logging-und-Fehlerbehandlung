const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();


app.use(morgan('combined'));


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Willkommen zur Startseite!');
});

app.get('/data', (req, res) => {
    res.send('GET Anfrage zu /data');
});

app.post('/data', (req, res) => {
    res.send('POST Anfrage zu /data');
});

app.put('/data', (req, res) => {
    res.send('PUT Anfrage zu /data');
});

app.delete('/data', (req, res) => {
    res.send('DELETE Anfrage zu /data');
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    });
});


app.use((req, res, next) => {
    res.status(404).json({
        status: 'error',
        message: 'Not Found',
    });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
