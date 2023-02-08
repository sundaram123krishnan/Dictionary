let word = document.getElementById("word");
let search = document.getElementById("search");
let main = document.getElementById("main");
let url = "";

search.onclick = () => {
  if (word.value != "") {
    url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
    url += word.value;
    let p = fetch(url);
    console.log(url);
    p.then((value) => {
      return value.json();
    }).then((value1) => {
      console.log(value1);
      console.log(value1[0].meanings[0].definitions[0].definition);
      let meaning = document.createElement("textarea");
      word.value = value1[0].meanings[0].definitions[0].definition;
      meaning.innerHTML = word.value;
    });
  }
  word.value = "";
};
