let uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let matrix = 
[
  ["A", "B", "C", "D", "E"],
  ["F", "G", "H", "I", "K"],
  ["L", "M", "N", "O", "P"],
  ["Q", "R", "S", "T", "U"],
  ["V", "W", "X", "Y", "Z"]
];

function getPosition(letter){
  let position = [];
  for(let i = 0; i < matrix.length; i++){
    let row = matrix[i];
    for(let j = 0; j < row.length; j++){
      let indivLetter = matrix[i][j];
      if(indivLetter == letter){
        position = [i + 1, j + 1];
      }
    }
  }
  if(position == []){
    return undefined;
  }else{
    return position;
  }
}

$(document).ready(function() {

    $('#encodeArea').keydown(function() {
      if (event.keyCode == 13) {
        var text = $('#encodeArea').val().trim().toUpperCase();
        text = text.replace(/\s+/g, '');
        let phrase = encode(text);
        $('#decodeArea').val(phrase);
      }
    });
  
    $('#decodeArea').keydown(function() {
      if (event.keyCode == 13) {
        var text = $('#decodeArea').val().trim().toUpperCase();
        text = text.replace(/\s+/g, '');
        let decodedPhrase = decode(text.trim());
        $('#encodeArea').val(decodedPhrase);
      }
    });
  });



  function encode(text){
    let rows = [];
    let cols = [];
    let groups = [];
    let encoded = "";
      for(let i = 0; i < text.length; i++){
        let letter = text[i];
        let position = getPosition(letter);
        let row = position[0];
        let col = position[1]; 
        rows.push(row);
        cols.push(col);
      }
    let all = rows.concat(cols);
    for(let i = 0; i < all.length; i+=2){
      groups.push([all[i], all[i + 1]])
    }
  
    for(let group of groups){
      let row = group[0];
      let col = group[1];
      let encodedLetter = matrix[row - 1][col - 1];
      encoded += encodedLetter;
    }
  
    return encoded;
  }
  
  function decode(text){
    let all = [];
    let decoded = "";
    for(let i = 0; i < text.length; i++){
      let letter = text[i];
      let letterPosition = getPosition(letter);
      let letterRow = letterPosition[0];
      let letterCol = letterPosition[1];
      all.push(letterRow);
      all.push(letterCol);
    }
  
    let half = Math.ceil(all.length / 2);    
  
    let rows = all.splice(0, half)
    let cols = all.splice(-half)
  
    for(let i = 0; i < rows.length; i++){
      let row = rows[i];
      let col = cols[i];
      let letter = matrix[row - 1][col - 1];
      decoded += letter;
    }
    return decoded;
  }