let Express = require('express');
let path = require('path');
let app = Express();

const port = 8080;

app.use('/public',Express.static(path.join(__dirname,'../Client/public')));

// app.get('/oleg',function(req,res){
//     res.sendFile(path.join(__dirname,'../Client/public/index.html'));
// });

// app.get('/',function(req,res){
//     res.sendFile(path.join(__dirname,'../Client/public/js/Hello.js'));
// });

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'../Client/public/second.html'));
});

app.listen(port, ()=>{
    console.log('server is up now. Check out port ' + port);
});