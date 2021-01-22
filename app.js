const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.json({
        message: 'My Rule-Validation API',
        status: 'success',
        data: {
            name: `Babatunde Afolabi`,
            github: `@Dontunee`,
            email: `t_afolabi@yahoo.com`,
            mobile: `09033176887`,
            twitter: `@dontune`
        }
    });
});


//configure PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}........`));