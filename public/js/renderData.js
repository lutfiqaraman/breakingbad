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
        .then(response => {
            response
                .then(result => {
                    if (result.error) {
                        msgOne.textContent = result.error;
                    } else {
                        console.log('RESULT: ' + result);
                        msgOne.textContent = '';
                        msgTwo.textContent = result;
                    }
                })
                .catch(error => {
                    if (error) {
                        console.log(error);
                    }
                })
            })
        .catch(error => {
            if (error)
                console.log(error);
        });
})


