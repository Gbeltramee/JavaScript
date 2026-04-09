import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Curso de Node.js');
});

export default app;