import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import { getRandomWord } from "./utils/utils.js";
import HighScore from './utils/models.js';


const app = express()
const port = 5080


app.use(express.json());
app.use(cors());


app.get("/api/random_word/:id?/:isUnique?", async (req, res) => {
  console.log(req.params.id, req.params.isUnique)
  const word = await getRandomWord(req.params.id, req.params.isUnique);
  console.log(word, "Hej")
  res.json({ word });
});


app.get('/', (req, res) => {
   
  res.send("Hello World")
})




app.get('/api/info', async (req, res) => {
    const fileBuf = await fs.readFile('./static/info.html');
    res.type('html');
    res.send(fileBuf);
  });
 
  
// GET Higscore from mongoDB
app.get("/api/highscore", async (req, res) => {
  const hScore = await HighScore.find();
  res.json(hScore);
})

// POST Highscore 

app.post("/api/highscore", async (req, res) => {
  //
  const highScoreInput = {
    name: req.body.name,
    length: req.body.length,
    unique: req.body.unique,
  };
  //req.body
  const hScoreP = new HighScore(highScoreInput);
  await hScoreP.save();
  res.status(201).json( {hScoreP})
})


app.listen(5080);
console.log("Listening on port 5080")

app.use(express.static("./public"));