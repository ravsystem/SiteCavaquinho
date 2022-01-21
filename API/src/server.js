const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./app/controller/authController')(app);
require('./app/controller/projectController')(app);

app.use(require('./routes'));

app.listen(3030);