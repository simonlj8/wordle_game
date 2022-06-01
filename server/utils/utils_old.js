const words = [
    "CYCLE",
    "HELLO",
    "GRANT",
    "STYLE",
    "FRONT",
    "CHAIR",
    "ROOMS",
    "HOUSE",
    "CHEAT",
    "TESTA",
    "KATT",
    "abcd",
    "abcde",
    "abcdef",
  ];
  
  export function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }


