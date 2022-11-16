const express = require('express');
const morgan = require('morgan');
const path = require('path');
const {json} = require('express');
    
const app = express();

app.use(morgan('dev'));
app.use(json());

// ROUTES
app.use(require('./routes'));

// PUBLIC
app.use(express.static(path.join('__dirname','public')));

// EJECUTAR EL SERVIDOR
app.set ('port',3000);

app.listen (app.get('port'), () => {
    console.log ('El servidor está ejecutándose');
});
