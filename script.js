function isWordWrong(word) {
  let rest = word.slice(1, word.length);
  let wrong = true;
  for (let l = 0; l < rest.length; l++) {
    let up = rest.charAt(l).toUpperCase();
    if (up !== rest.charAt(l)) {
      wrong = false;
      break;
    }
  }
  return wrong;
}

function capsLock(str) {
  let data = str.split(' ');
  let result = '';
  for (let i = 0; i < data.length; i++) {
    let word = data[i];
    let word_ = word;
    if (isWordWrong(word)) {
      word = '';
      for (let l = 0; l < word_.length; l++) {
        let letter = word_.charAt(l);
        if (letter.toUpperCase() === letter) {
          word += letter.toLowerCase();
        } else {
          word += letter.toUpperCase();
        }
      }
      result += word + ' ';
    } else {
      result += word + ' ';
    }
  }
  return result;
}

let check = capsLock('FuNkY iS nOt CaPs!');
console.log(check);
