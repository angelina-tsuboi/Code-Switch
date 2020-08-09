let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let upperTable = [uppercaseLetters];

let plaintext = "ATTACKATDAWN";
let key = "LEMON"; //set default key
let repeatKey = "";
setUpKey(key);
let solution = "";


$(document).ready(function() {

    $('#encodeArea').keydown(function() {
      if (event.keyCode == 13) {
        var text = $('#encodeArea').val();
        if(text == "KEY()" || text == "SETKEY()"){
            key = prompt("What should the key be?");
            setUpKey(key.toUpperCase().trim());
        }else{
            let encoded = encodify(text.toUpperCase().trim());
            $('#decodeArea').val(encoded);
        }
      }
    });
  
    $('#decodeArea').keydown(function() {
      if (event.keyCode == 13) {
        var text = $('#decodeArea').val();
        let decoded = codify(text.toUpperCase().trim());
      }
    });
  });


//Set up Tables
function getLetterSet(set, index, table){
    let first = set[0];
    let newSet = [];
    for(let i = 1; i <= 25; i++){
      newSet.push(set[i])
    }
    newSet.push(first);
    table.push(newSet);
    if(index <= 23){
      getLetterSet(newSet, index + 1, table);
    }else{
      return table;
    }
  }

  let uppercaseTable = getLetterSet(uppercaseLetters, 0, upperTable);




// Helper Methods

  function setUpKey(key){
    repeatKey = "";
    let remainder = plaintext.length % key.length;
    let round = Math.round(plaintext.length / key.length);
    
    for(let i = 0; i < round; i++){
      repeatKey += key;
    }
    
    for(let i = 0; i < remainder; i++){
      repeatKey += key[i];
    }

  }

  function codify(value){
    let decoded = "";
    let words = value.split(' ');
    for(let word of words){
      let decodedWord = "";
      for(let i = 0; i < word.length; i++){
        let letter = word[i];
        let cipher = "";
        if(uppercaseLetters.includes(letter)){
          
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
        let keyLetter = repeatKey[i];
        let cipher = "";
        let rowNum;
        let colNum;
        if(uppercaseLetters.includes(letter)){
            rowNum = uppercaseLetters.indexOf(keyLetter);
            colNum = uppercaseLetters.indexOf(letter);
            cipher = upperTable[rowNum][colNum];
        }else{
          cipher = letter;
        }
  
        encodedWord += cipher;
      }
      encoded += `${encodedWord} `
    }
    return encoded;
  }
  