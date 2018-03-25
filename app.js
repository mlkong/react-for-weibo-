const express = require('express');
const path = require('path');

let app = express();

// uncomment after placing your favicon in /public
app.use('/',express.static(path.join('./build')));
// app.use('/a',express.static(path.join('./build')));
// app.get('/',function (req,res,next) {
//     res.send('./1.html')
// });
app.listen(3001);

