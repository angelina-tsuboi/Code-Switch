let arrowPos = 0;


$(document).ready(function() {
  updateText(arrowPos);
});

document.onkeydown = function(e) {
  switch(e.which) {
      case 38: // up
      if(arrowPos - 1 >= 0){
        arrowPos--;
      }
      updateText(arrowPos);
      break;

      case 40: // down
      if(arrowPos + 1 <= 5){
        arrowPos++;
      }
      updateText(arrowPos);
      break;

      case 13: //enter
        goTo(arrowPos);
      break;

      default: return; // exit this handler for other keys
  }
  e.preventDefault(); // prevent the default action (scroll / move caret)
};


function updateText(arrowPos){
  switch(arrowPos){
    case 0:
      $('textarea').val('1) Caesar Cipher < \n2) Atbash Cipher \n3) Keyword Cipher \n4) Vigenere Cipher \n5) Polybius Cipher \n5) Binary \n');
    break;

    case 1:
      $('textarea').val('1) Caesar Cipher \n2) Atbash Cipher < \n3) Keyword Cipher \n4) Vigenere Cipher \n5) Polybius Cipher \n5) Binary \n ');
    break;

    case 2:
      $('textarea').val('1) Caesar Cipher \n2) Atbash Cipher \n3) Keyword Cipher < \n4) Vigenere Cipher \n5) Polybius Cipher \n5) Binary \n ');
    break;

    case 3:
      $('textarea').val('1) Caesar Cipher \n2) Atbash Cipher \n3) Keyword Cipher \n4) Vigenere Cipher < \n5) Polybius Cipher \n5) Binary \n ');
    break;

    case 4:
      $('textarea').val('1) Caesar Cipher \n2) Atbash Cipher \n3) Keyword Cipher \n4) Vigenere Cipher \n5) Polybius Cipher < \n5) Binary \n ');
    break;

    case 5:
      $('textarea').val('1) Caesar Cipher \n2) Atbash Cipher \n3) Keyword Cipher \n4) Vigenere Cipher \n5) Polybius Cipher \n5) Binary <');
    break;
  }
}

function goTo(arrowPos){
  let location = window.location.pathname;
  let locations = location.split('/');
  locations.splice(locations.length - 1);
  let final;
  switch(arrowPos){
    case 0:
      final = locations.join('/').concat('/app/caesar.html');
      window.location = final;
      break;
    case 1:
      final = locations.join('/').concat('/app/atbash.html');
      window.location = final;
      break;
    case 2:
      final = locations.join('/').concat('/app/keyword.html');
      window.location = final;
      break;
    case 3:
      final = locations.join('/').concat('/app/vigenere.html');
      window.location = final;
      break;
    case 4:
      final = locations.join('/').concat('/app/polybius.html');
      window.location = final;
      break;

    case 5:
      final = locations.join('/').concat('/app/binary.html');
      window.location = final;
      break;
  }
}


/* Otherwise just put the config content (json): */
