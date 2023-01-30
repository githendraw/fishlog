const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const data = require('./sku.json');



app.get('/', function(req, res) {
  let rows = data;
  if(req.query.keyword){
    rows = data.filter((field)=>field.item_name.toLowerCase().includes(req.query.keyword));
  }
  rows = rows.sort((a,b)=>{
    return b.item_name - a.item_name; 
  });
  res.send({
    'data': rows,
    'count': rows.length
  });
});

app.listen(port);
console.log('Server started at ' + port);