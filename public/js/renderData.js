// Render data using javascript
const searchForm = document.querySelector("form");

searchForm.addEventListener("submit", e => {
    e.preventDefault();

    const searchBox     = document.querySelector("input");
    const msgOne        = document.querySelector("#msgOne");
    const msgTwo        = document.querySelector("#msgTwo");
    const characterName = searchBox.value;

    msgOne.textContent  = "Loading ...";

    fetch("/character?name=" + characterName)
        .then((res) => {
            res
                .json()
                .then((d) => {
                    msgOne.textContent = '';
                    msgTwo.innerHTML =
                        'Name: ' + d.data.name + '<br/>' +
                        'Birthday: ' + d.data.birthday + '<br/>' +
                        'Nickname: ' + d.data.nickname;
                })
                .catch(e => {
                    console.log('Cannot render the data due to ' + e);
                });
        })
        .catch((e) => {
            console.log('Fetch API is not working due to ' + e);
        });
})


