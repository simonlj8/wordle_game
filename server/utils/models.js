import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://bosse:hmMU7sWgyuXhYzYZ@cluster0.pbxry.mongodb.net/wordleDB?retryWrites=true&w=majority');

const HighScore = mongoose.model('highscores', {
  name: String,
  guesses: Number,
  time: Number,
  length: Number,
  isUnique: Boolean,
  unique: Boolean,
  //date: String,
  correctWord: String,
  duration: Number,
});

console.log(HighScore)
export default HighScore ;

