// Render data using javascript
const searchForm = document.querySelector("form");
const searchBox  = document.querySelector("input");
const msgOne     = document.querySelector("#msgOne")
const msgTwo     = document.querySelector("#msgTwo")

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const characterName = searchBox.value;
    msgOne.textContent = "Loading ...";

    fetch("/character?name=" + characterName)
        .then((r) => {
            console.log(r);
        })
        .catch((e) => {
            console.log(e);
        });
})


