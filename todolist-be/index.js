const express = require("express");
const cors = require('cors');
const res = require("express/lib/response");
const app = express();

app.use(express.json());
app.use(cors());

app.get('/test', async(req, res) =>{
  res.json("hallo manteman");
  res.end();
});

app.listen(3000, () => console.log("listening at port: 3000"));