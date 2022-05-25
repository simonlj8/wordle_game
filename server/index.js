import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express'
import cors from 'cors'
import fs from 'fs/promises'
import { getRandomWord } from "./utils/utils.js";


const app = express()
const port = 5080


app.use(express.json());
app.use(cors());


//
app.get("/api/random_word", (req, res) => {
  const word = getRandomWord();

  res.json({
    word,
  });
});
//

app.get('/', (req, res) => {
   
  res.send("Hello World")
})

app.get('/api/info', async (req, res) => {
    const fileBuf = await fs.readFile('./static/info.html');
    res.type('html');
    res.send(fileBuf);
  });
  
app.get("/api/highscore", async (req, res) => {
    const filebuf = await fs.readFile("./public/highscore.html");
    res.type("html");
    res.send(filebuf);
})

app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`)
});

app.use(express.static("./public"));