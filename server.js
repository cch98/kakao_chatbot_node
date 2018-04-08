let express = require('express');
let app = express();

let bp = require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({extended:true}));

app.get('/keyboard',function(req, res){
    let keyboard = {
        'type':'buttons',
        'buttons':['시작하기']
    };

    res.set({
        'content-type': 'application/json'
    }).send(JSON.stringify(keyboard));

});

app.post('/message', function(req, res){
    let ans = req.body;
    console.dir(ans);

});





let port = 8000;
app.listen(port, function(){
    console.log('Listening in ' + port);
});