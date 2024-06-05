var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

app.use('/userpanel', express.static('./'));

app.listen(8000);
