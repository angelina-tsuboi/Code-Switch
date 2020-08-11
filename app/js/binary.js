

let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


$(document).ready(function() {

    $('#encodeArea').keydown(function() {
      if (event.keyCode == 13) {
        $('#decodeArea').val("");
        var text = $('#encodeArea').val().trim().toUpperCase();
          var value = encodify(text.split(" "));
          $('#decodeArea').val(value);
      }
    });
  
    $('#decodeArea').keydown(function() {
      if (event.keyCode == 13) {
        var text = $('#decodeArea').val().trim();
        let decodedPhrase = decode(text);
        $('#encodeArea').val(decodedPhrase);
      }
    });
  });


  function encodify(value){
    let final = "";
    let word = value;
    let letters = word.toString().split("");
    let remaining = 0;
    
    for(let letter of letters){
      let binary = "";
      var charCode = alphabet.indexOf(letter)
      remaining = charCode + 65;
      while(remaining > 0){
        if(remaining % 2 == 0){
          binary += "0";
        }else{
          binary += "1";
        }
    
        remaining = Math.floor(remaining / 2);
      }
      binary += "0";
      binary = binary.split("").reverse().join("");
      final += `${binary} `;
    }
    return final;
  }

  function decode(value){
      let binaries = value.split(' ');
      let result = "";

      for(let binary of binaries){
          let bi = binary.split('').reverse().join('');
          console.log(bi);
          let returnValue = 0;
          for(let i = 0; i < bi.length; i++){
              let number = bi[i]; //
              console.log(number);
              if(number == 1){
                let resNumber = 2 ** i;
                
                returnValue += resNumber;
              }
          }

          console.log("val", returnValue - 65)
          let letter = alphabet[returnValue - 65];
          result += letter;
      }
      return result;
  }