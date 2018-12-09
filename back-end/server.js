import express from 'express';

const app = express();

app.get('/' , (req, res) => res.send('Hello Jawad Aziz Farhad'));

app.listen(4000, () => console.log('Kemon Server is Listening on port 4000.'));