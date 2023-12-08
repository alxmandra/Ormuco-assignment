require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { getCache, setCache } = require('./src/caching');
const app = express();

app.use(bodyParser.json());

app.get("/", function (req, res) {
    res.send({ status: "success" });
  });

app.get('/setKey', async (req, res, next) => {
    try{
        const response = {};
        const cacheData = await getCache(req.query.key);
        if(cacheData) {
            response['message'] = 'cache hit';
            response['result'] = JSON.parse(cacheData);
        }else {
            response['message'] = 'cache miss';
            response['result'] = req.query.value;
            setCache(req.query.key, req.query.value);
        }
        res.status(200).send(response);
    }catch(err) {
        res.status(400).send(err);
    }
})

const server = app.listen(process.env.PORT || 8000, function () {
    const port = server.address().port;
  
    console.log("App started at port:", port);
  });
