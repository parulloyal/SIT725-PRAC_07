

let express = require('express'); //importing the express framwork as we are going to use this one
let app = express();
let port = process.env.port || 5500;
require('./dbConnection');
let router = require('./routers/router');


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

app.listen(port, () => {
    console.log('Server started on PORT', port);
});




