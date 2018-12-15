let Express = require('express');
let app = Express();

const port = 8080;

app.listen(port, ()=>{
    console.log('server is up now. Check out port ' + port);
});