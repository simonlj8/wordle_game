import mongoose from 'mongoose';
// import * as dotenv from 'dotenv';
import 'dotenv/config';
// dotenv.config();


mongoose.connect('mongodb+srv://bosse:IO6HHq3T80lPerS9@cluster0.pbxry.mongodb.net/wordleDB?retryWrites=true&w=majority&appName=Cluster0',
  () => console.log('Connected to DB')
);

const HighScore = mongoose.model('highscores', {
  name: String,
  guesses: Number,
  time: Number,
  length: Number,
  isUnique: Boolean,
  unique: Boolean,
  correctWord: String,
  duration: Number,
});

console.log(HighScore)
export default HighScore ;

