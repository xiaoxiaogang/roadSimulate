var events = require('events');

var connectEvent = new events.EventEmitter();


var connectTemp = function connect(){
    console.log('连接成功');
    connectEvent.emit('received');
}

var receivedTemp = function received(){
    console.log('连接成功111');
}

connectEvent.on('connection', connectTemp);
connectEvent.on('received', receivedTemp);

connectEvent.emit('connection');
console.log( __dirname);
console.log('程序执行完毕');