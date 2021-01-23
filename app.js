const express = require('express');
const app = express();

const { home } = require('./api/home');
const {validate} = require('./api/validate');
app.use(express.json());

app.get('/', home);
app.post('/validate-rule', validate);


//configure PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}........`));