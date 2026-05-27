const getButton = document.querySelector('#IDgetButton');
const getInput = document.querySelector('#idInput');

async function getMessage(){
    try {
        const res = await fetch("http://localhost:3000/message");

    if (!res.ok){
        throw new Error(`Http Fehler: ${res.status}`);
    }
        const response = await res.json();
        getInput.value = response.message;

        console.log("Server antwortet: ", response.message);
    }
    catch (error){
        console.error("Fehler beim Abrufen:" , error.message);;
    };
    
};

getButton.addEventListener("click", getMessage);