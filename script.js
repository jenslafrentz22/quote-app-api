const state = {
  quotes: [],
  author: [],
};

document.querySelector("button").addEventListener("click", loadData);

function loadData() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    // .then((response) => response.json())
    //   .then((data) => {
    //     document.body.append(document.createTextNode(data.quote));

    //     document.body.append(document.createTextNode(data.author));
    //   });

    // Fehlerbehandlung:
    .then(function (response) {
      console.log(response);
      if (response.ok) {
      } else {
        throw new Error("ITler: Fehler beim Abruf der API");
      }
      return response.json();
    })
    // Aufruf der render-Function (Visualisierung der Daten)
    .then((jsonData) => {
      console.log(jsonData.quote);
      state.quotes = jsonData.quote;
      state.author = jsonData.author;
      render(jsonData);
    });
  /*
    // Wenn es einen Fehler gibt, gib:
    .catch((error) => {
      // Feedback für User
      alert("Lieber User, leider Fehler beim Abruf der API");
      // Feedback für Entwickler
      console.log(error);
    });
*/
  // render-Function
  function render() {
    const li = document.createElement("li");
    const hr = document.createElement("hr");
    li.innerText = state.quotes + "\n" + "(" + state.author + ")";
    document.querySelector("#list").append(li, hr);
  }
}
