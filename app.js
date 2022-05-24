function control() {
  const inputText = document.getElementById("inputText").value;
  const inputResult = document.getElementById("inputResult");
  const palindromResult = document.getElementById("palindromResult");
  inputResult.innerHTML = inputText;
  let len = inputText.length;
  let start = inputText.substring(0, Math.floor(len / 2)).toLowerCase();
  let end = inputText.substring(len - Math.floor(len / 2)).toLowerCase();
 
  let flip = end.split("").reverse().join("");
   start === flip;
  console.log(flip);

  if (start === flip) {
    palindromResult.innerHTML="Dieses Wort ein Polindrom"
    document.querySelector(".container").style.backgroundColor="green"
  } else {
    palindromResult.innerHTML="Dieses Wort kein Polindrom"
    document.querySelector(".container").style.backgroundColor="gray"
  }
}
