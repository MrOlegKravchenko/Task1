let Express = require('express');
let path = require('path');
let app = Express();

const port = 8080;

app.get('/oleg',function(req,res){
    res.sendFile(path.join(__dirname,'../Client/public/index.html'));
    // res.send('Oleg loool');
});

app.listen(port, ()=>{
    console.log('server is up now. Check out port ' + port);
});