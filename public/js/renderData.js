// Render data using javascript
const searchForm = document.querySelector("form");
const searchBox  = document.querySelector("input");

searchForm.addEventListener("submit", e => {
    e.preventDefault();
    const characterName = searchBox.value;

    fetch("")
        .then()
        .catch(error => {
            if (error)
                console.log(error);
        });
})


