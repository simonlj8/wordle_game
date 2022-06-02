import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import { getRandomWord } from "./utils/utils.js";
import HighScore from './utils/models.js';


const app = express()
const port = 5080;


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
  let hScore = await HighScore.find();
  hScore = hScore.sort((a, b) => a.time - b.time);
//
const highscoreList = hScore.map((entry) => ({
  name: entry.name,
  guesses: entry.guesses,
  correctWord: entry.correctWord,  
  length: entry.length,
  unique: entry.unique,
  date: entry.date,
  duration : entry.duration,
}));
res.json(highscoreList);
//res.json(hScore);
})

// POST Highscore 

app.post("/api/highscore", async (req, res) => {
  //
  const highScoreInput = {
    name: req.body.name,
   // length: req.body.length,
    //unique: req.body.unique,
    //time: req.body.time,
    guesses: req.body.guesses,
    duration: req.body.duration,
    correctWord: req.body.correctWord,
  };
  console.log(highScoreInput)
  //req.body
  const hScoreP = new HighScore(highScoreInput);
  await hScoreP.save();
  res.status(201).json( {hScoreP})
})


app.listen(5080);
console.log("Listening on port 5080")

app.use(express.static("./public"));