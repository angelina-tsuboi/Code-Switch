let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let upperTable = [uppercaseLetters];
let lowerTable = [lowercaseLetters];

let plaintext = "ATTACKATDAWN";
let key = "LEMON"; //set default key
let repeatKey = "";
setUpKey(key);
let solution = "";


$(document).ready(function() {

    $('#encodeArea').keydown(function() {
      if (event.keyCode == 13) {
        var text = $('#encodeArea').val();
        alert(text);
        if(text == "key()" || text == "setKey()"){
            key = prompt("What should the key be?");
            setUpKey(key);
        }else{

        }
      }
    });
  
    $('#decodeArea').keydown(function() {
      if (event.keyCode == 13) {
        var text = $('#decodeArea').val();
       
      }
    });
  });


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