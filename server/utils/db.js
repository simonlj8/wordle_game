const HIGHSCORES = [];
const test = []
export async function saveHighscore(highscore) {
  HIGHSCORES.push(highscore);
  return highscore;
}

export async function loadHighscores()  {
  return HIGHSCORES;
}