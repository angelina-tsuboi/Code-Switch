let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


$(document).ready(function() {

  $('#encodeArea').keydown(function() {
    if (event.keyCode == 13) {
      var text = $('#encodeArea').val().trim().toUpperCase().split(" ");
      var value = encodify(text);
      $('#decodeArea').val(value);
    }
  });

  $('#decodeArea').keydown(function() {
    if (event.keyCode == 13) {
      var text = $('#decodeArea').val().trim();
      let decodedPhrase = codify(text);
      $('#encodeArea').val(decodedPhrase);
    }
  });
});



function codify(value){
  let decoded = "";
  let words = value.split(' ');
  for(let word of words){
    let resWord = "";
    if(word == ''){
       resWord = " ";
    }else{
      let wordLetters = word.split('');
      for(let letter of wordLetters){
          let resultLetter = letters[(letters.length - 1) - letters.indexOf(letter)];
          resWord += resultLetter;
      }
    }
  
    decoded += `${resWord} `;
  }

  return decoded;
}


function encodify(words){
let solution = "";

  for(word of words){
    let chars = Array.from(word);
    let solutionWord = "";
    for(let i = 0;  i < chars.length; i++){
      let char = chars[i];
      let cipher = "";
  
      for(let j = 0; j < letters.length; j++){
          let letter = letters[j];
          if(char == letter){
              cipher = letters[(letters.length - 1) - j];
              solutionWord += cipher;
          }
      }
    }
    solution += `${solutionWord} `;
  }
  
  return solution;
}
