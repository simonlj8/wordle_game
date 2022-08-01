import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import { getRandomWord } from "./utils/utils.js";
import HighScore from './utils/models.js';
import { engine } from 'express-handlebars'


const app = express()

app.use(express.json());
app.use(cors());
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set('views', './templates');

app.get("/api/word/:id?/:unique?", async (req, res) => {
  const word = await getRandomWord(req.params.id, req.params.unique);
  console.log(req.params.id, req.params.unique)
  console.log(word)
  res.status(200).json({ word });
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

const highscoreList = hScore.map((e) => ({
  name: e.name,
  guesses: e.guesses,
  correctWord: e.correctWord,  
  length: e.length,
  isUnique: e.isUnique,
  date: e.date,
  time : e.time,
}
));
res.render('home', { highscoreList} );
})

// POST Highscore 

app.post("/api/highscore", async (req, res) => {
  const highScoreInput = {
    name: req.body.name,
    length: req.body.length,
    isUnique: req.body.isUnique,
    time: req.body.time,
    guesses: req.body.guesses,
    correctWord: req.body.correctWord,
  };
  console.log(highScoreInput)
  const hScoreP = new HighScore(highScoreInput);
  await hScoreP.save();
  res.status(201).json( {hScoreP})
})


app.listen(5080);

console.log("listening on port: 5080")

app.use(express.static("./public"));