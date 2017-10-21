import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression()); //used to serve the app on loacl machine just to see the builds
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Blessing","lastName":"Oraz","email":"blessing@gmail.com"},
    {"id": 2,"firstName":"Chidi","lastName":"Umeh","email":"chidi@yahoo.com"},
    {"id": 3,"firstName":"Chibuzor","lastName":"Abum","email":"oyin@hotmail.com"}
  ]);
})

app.listen(port, (err) => {
  if(err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
