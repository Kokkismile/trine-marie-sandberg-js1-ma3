//ANSWER QUESTION 2

const apiKey = "7e4f8935456c47bbb745861dedea99ef";
const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";

htmlContainer = document.querySelector(".container");
const message = document.querySelector(".message");
message.innerHTML = `<p class="loading">LOADING...</p>`;

async function apiCall() {

    try {
        const response = await fetch(apiUrl + apiKey);
        
        const returnJson = await response.json();

        message.innerHTML = displaySuccess("Success!");

        for (i = 0; i < 8; i++){

            htmlContainer.innerHTML += `<div class="game-container"><h2>${[returnJson.results[i].name]}</h2>
                                       <p>Rating: ${[returnJson.results[i].rating]}</p>
                                       <p>Number of tags: ${[returnJson.results[i].tags.length]}</p>
                                       </div>`
        }

        } catch (error) {

        message.innerHTML = displayError("Error");

        }       
    
};

apiCall();