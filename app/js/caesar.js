let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var shift = 3;

let word = ""
let decoded = ""

$('#encodeButton').click(function(){
    var text = $('#encodeArea').val();
    let decodedPhrase = codify(text.trim());
    $('#decodeArea').val(decodedPhrase);

})

$('#decodeButton').click(function(){
  var text = $('#decodeArea').val();
  let encodedPhrase = encodify(text.trim());
  $('#encodeArea').val(encodedPhrase);
})


function codify(value){
  let decoded = "";
  let words = value.split(' ');
  for(let word of words){
    let decodedWord = "";
    for(let i = 0; i < word.length; i++){
      let letter = word[i];
      let cipher = "";
      if(uppercaseLetters.includes(letter)){
        cipher = uppercaseLetters[uppercaseLetters.indexOf(letter) + shift];
      }else if(lowercaseLetters.includes(letter)){
        cipher = lowercaseLetters[lowercaseLetters.indexOf(letter) + shift];
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
        cipher = uppercaseLetters[uppercaseLetters.indexOf(letter) - shift];
      }else if(lowercaseLetters.includes(letter)){
        cipher = lowercaseLetters[lowercaseLetters.indexOf(letter) - shift];
      }else{
        cipher = letter;
      }

      encodedWord += cipher;
    }
    encoded += `${encodedWord} `
  }
  return encoded;
}
