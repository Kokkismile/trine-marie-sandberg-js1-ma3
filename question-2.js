//ANSWER QUESTION 2

const apiKey = "7e4f8935456c47bbb745861dedea99ef";
const apiUrl = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=";

htmlContainer = document.querySelector(".container");
let objects = "";

async function apiCall() {
    try {
        const response = await fetch(apiUrl + apiKey);
        
        const returnJson = await response.json();
        console.log(returnJson.results)
        for (i = 0; i < 8; i++){
            console.log([returnJson.results[i]])


        }

        } catch (error) {
        console.log(error);
        htmlContainer.innerHTML = error;
        }       
    
};


apiCall()