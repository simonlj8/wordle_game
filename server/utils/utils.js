import fetch from 'node-fetch';
export async function getRandomWord(length, unique) {
  
  const res = await fetch(
    'https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json'   
  );

  const body = await res.json();
  const words = await Object.keys(body).filter(
    (word) => 
       word.length == length  
  );
  const randomIndex = Math.floor(Math.random() * words.length);
  const uniqueC = words.filter(
    (e) => [...new Set(e.split(''))].join('') == e );
  
  if (unique) {
    return await uniqueC[
      Math.floor(Math.random() * uniqueC.length)
    ].toUpperCase();
  }
  return await words[randomIndex];
} 

