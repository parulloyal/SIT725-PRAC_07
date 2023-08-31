

let express = require('express'); //importing the express framwork as we are going to use this one
let app = express();
let port = process.env.port || 5500;
require('./dbConnection');
let router = require('./routers/router');
const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/cat', router);

io.on('connection',(socket)=>{
    console.log('something');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    setInterval(()=>{
        socket.emit('number', parseInt(Math.random()*10));
    }, 1000)
});


http.listen(port, () => {
    console.log('Server started on PORT', port);
});




