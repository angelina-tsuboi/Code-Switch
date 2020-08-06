let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var shift = 3;

let word = ""
let decoded = ""


$(document).ready(function() {

  $('#encodeArea').keydown(function() {
    if (event.keyCode == 13) {
      var text = $('#encodeArea').val();
      let decodedPhrase = encodify(text.trim());
      $('#decodeArea').val(decodedPhrase);
    }
  });

  $('#decodeArea').keydown(function() {
    if (event.keyCode == 13) {
      var text = $('#decodeArea').val();
      let encodedPhrase = codify(text.trim());
      $('#encodeArea').val(encodedPhrase);
    }
  });
});



function codify(value){
  let decoded = "";
  let words = value.split(' ');
  for(let word of words){
    let decodedWord = "";
    for(let i = 0; i < word.length; i++){
      let letter = word[i];
      let cipher = "";
      if(uppercaseLetters.includes(letter)){
        let index = uppercaseLetters.indexOf(letter) + shift;
        index > uppercaseLetters.length - 1 ? cipher = uppercaseLetters[index - uppercaseLetters.length] : cipher = uppercaseLetters[index];
        
      }else if(lowercaseLetters.includes(letter)){
        let index = lowercaseLetters.indexOf(letter) + shift;
        index > lowercaseLetters.length - 1 ? cipher = lowercaseLetters[index - lowercaseLetters.length] : cipher = lowercaseLetters[index];
      }else{
        cipher = letter;
      }

      decodedWord += cipher;
    }
    decoded += `${decodedWord} `
  }

  return decoded;
}


function encodify(value){
  let encoded = "";
  let words = value.split(' ');
  for(let word of words){
    let encodedWord = "";
    for(let i = 0; i < word.length; i++){
      let letter = word[i];
      let cipher = "";
      if(uppercaseLetters.includes(letter)){
        let index = uppercaseLetters.indexOf(letter) - shift;
        index < 0 ? cipher = uppercaseLetters[uppercaseLetters.length - Math.abs(index)] :  cipher = uppercaseLetters[index];
      }else if(lowercaseLetters.includes(letter)){
        let index = lowercaseLetters.indexOf(letter) - shift;
        index < 0 ? cipher = lowercaseLetters[uppercaseLetters.length - Math.abs(index)] : cipher = lowercaseLetters[index];  
      }else{
        cipher = letter;
      }

      encodedWord += cipher;
    }
    encoded += `${encodedWord} `
  }
  return encoded;
}
