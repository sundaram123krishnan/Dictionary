let word = document.getElementById("word");
let search = document.getElementById("search");
let main = document.getElementById("main");
let url = "";
let meaning = document.createElement("div");
search.onclick = () => {
  if (word.value != "") {
    url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    url += word.value;
    let p = fetch(url);
    console.log(url);
    p.then((value) => {
      return value.json();
    }).then((value1) => {
      // console.log(value1);
      // console.log(value1[0].meanings[0].definitions[0].definition);
      let val = value1[0].meanings[0].definitions[0].definition;
      meaning.innerHTML = val;
      meaning.style.border = "0.25rem solid black";
      meaning.style.padding = "1rem";
      meaning.style.width = "auto";
      meaning.style.fontSize = "1.5rem";
      meaning.style.fontWeight = "bold";
      main.insertBefore(meaning,main.children[2])
    });
  }
  word.value = "";
  main.removeChild(meaning)
};
