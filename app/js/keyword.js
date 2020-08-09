let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let modifiedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


let keyword;
let keywords;
let newAlpha;
setKeyword("KEYWORD");

$(document).ready(function() {

  $('#encodeArea').keydown(function() {
    if (event.keyCode == 13) {
      var text = $('#encodeArea').val().trim().toUpperCase();
      if(text == "KEY()" || text=="SETKEY()"){
        let newKeyword = prompt("What should the keyword be?").trim().toUpperCase();
        setKeyword(newKeyword);
      }else{
        var value = encodify(text.split(" "));
        $('#decodeArea').val(value);
      }
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
          let resultLetter = letters[newAlpha.indexOf(letter)];
    
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
      let normalIndex = letters.indexOf(char);
      solutionWord += newAlpha[normalIndex];
    }
    solution += `${solutionWord} `;
  }
  
  return solution;
}


// HELPERS

function setKeyword(keywordVal){
    newAlpha = [];
    keyword = keywordVal;
    modifiedLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    keywords = Array.from(keyword);
    for(let i = 0; i < keywords.length; i++){
        let matchIndex = modifiedLetters.indexOf(keywords[i]);
        if(matchIndex != -1){
            modifiedLetters.splice(matchIndex, 1);
        }else{
            keywords.splice(i, 1);
        }  
    }
      
    newAlpha = keywords.concat(modifiedLetters)
}
