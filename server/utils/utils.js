import fetch from 'node-fetch';
export async function getRandomWord(WordLength, unique) {

  const response = await fetch(
    'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'
  );

  const body = await response.json();
  const words = await Object.keys(body).filter(
    (word) => {
      return word.length == WordLength
    }
  );
  const randomIndex = Math.floor(Math.random() * words.length);
  const uniqueC = words.filter(
    (e) => [...new Set(e.split(''))].join('') == e
  );
  
  if (unique) {
    return await uniqueC[
      Math.floor(Math.random() * uniqueC.length)
    ].toUpperCase();
  }
  return await words[randomIndex];

}
