let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var shift = 3;

let word = ""
let decoded = ""

$('#encodeButton').click(function(){
    encode($('#encodeArea').val());
})

$('#decodeButton').click(function(){
    alert($('#decodeArea').val());
})

function decode(val){

}

function encode(word){
    let toCode = word.toUpperCase().trim();

    for(var i = 0; i < word.length; i++){
        let letter = toCode[i];
        let cipher;
        for(let j = 0; j < letters.length; j++){
          if(letters[j] == letter){
            cipher = letters[j + shift];
          }
        }
        decoded += cipher;
      }
      $('#decodeArea').val(decoded);
}