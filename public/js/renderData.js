// Render data using javascript
const searchForm = document.querySelector("form");
const searchBox  = document.querySelector("input");
const msgOne     = document.querySelector("#msgOne");
const msgTwo     = document.querySelector("#msgTwo");

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const characterName = searchBox.value;
    msgOne.textContent = "Loading ...";

    fetch("/character?name=" + characterName)
        .then((res) => {
            res
                .json()
                .then((d) => {
                    msgOne.textContent = '';
                    msgTwo.innerHTML = d.data.birthday;
                })
                .catch(e => {
                    console.log('Cannot render the data due to ' + e);
                });
        })
        .catch((e) => {
            console.log('Fetch API is not working due to ' + e);
        });
})


