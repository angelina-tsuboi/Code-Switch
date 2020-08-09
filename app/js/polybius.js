let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let matrix = 
[
  ["A", "B", "C", "D", "E"],
  ["F", "G", "H", "I", "K"],
  ["L", "M", "N", "O", "P"],
  ["Q", "R", "S", "T", "U"],
  ["V", "W", "X", "Y", "Z"]
]


$(document).ready(function() {

  $('#encodeArea').keydown(function() {
    if (event.keyCode == 13) {
      var text = $('#encodeArea').val().trim().toUpperCase();
      let words = text.split(' ');
      let phrase = "";
      for(let word of words){
        let encodedWord = encodify(word);
        phrase += `${encodedWord} `;
      }
      $('#decodeArea').val(phrase);
    }
  });

  $('#decodeArea').keydown(function() {
    if (event.keyCode == 13) {
      var text = $('#decodeArea').val();
      let decodedPhrase = codify(text.trim());
      $('#encodeArea').val(decodedPhrase);
    }
  });
});



function codify(value){
  let decoded = "";
  let numbers = value.split(' ');
  for(let number of numbers){
    if(number == ''){
      letter = " ";
    }else{
      let nums = number.split('');
      let row = parseInt(nums[0]);
      let col = parseInt(nums[1]);
      letter = matrix[row - 1][col - 1];
    }
  
    decoded += `${letter}`;
  }

  return decoded;
}


function encodify(word){
  let chars = Array.from(word);
  let solution = "";
  for(let i = 0;  i < chars.length; i++){
    let char = chars[i];

    if(letters.includes(char)){
      for(let j = 0; j < matrix.length; j++){
        let row = matrix[j];
        if(row.includes(char)){
          let index = (row.indexOf(char) + 1).toString();
          let num = (j + 1) + index;
          solution += `${num} `;
        }
      }
    } 
  }
  return solution;
}
