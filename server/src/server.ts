import express, { response } from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários.');

    //Json
    response.send([
        'Ana',
        'Laura',
        'Maria',
        'Paula'
    ]);
});

app.listen(3333);