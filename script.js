function myFunction(){
  var x = document.getElementById("textarea").value;
  var averageWords = 0;
  var spaceCounter = 0;
  var sentenceCounter = 0;
  var wordCounter = 1;

  for(var i=0; i<=x.length; i++){
    if (x[i] == ' '){
      spaceCounter++;
      wordCounter++;
    }
    if (x[i] == '.' || x[i] == '?' || x[i] == '!'){
      sentenceCounter++;
    }
  }

  averageWords = wordCounter/sentenceCounter;

  document.getElementById("row1").innerHTML = 'There is an average of ' + averageWords + ' word(s) per sentence.';
  document.getElementById("row2").innerHTML = 'There is ' + spaceCounter + ' space(s) in this text';
  document.getElementById("row3").innerHTML = 'There is ' + wordCounter + ' word(s) in this text.';
  document.getElementById("row4").innerHTML = 'There is ' + sentenceCounter + ' sentence(s) in this text.';
}
