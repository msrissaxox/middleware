import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";
//parse info
app.use(bodyParser.urlencoded({extended: true }));
//then generate band name
const newBandGenerator = function(req, res, next){
bandName = req.body["street"] + req.body["pet"];
next();
}

app.use(newBandGenerator);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  console.log(__dirname + "/public/index.html");
  res.send(bandName);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//bodyparser needed
//res.send send back the rersult

