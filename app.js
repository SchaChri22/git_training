const getButton = document.querySelector('#IdGetButton');
const getOutput = document.querySelector('#idOutput');
const postButton = document.querySelector('#IdPostButton');
const postInput = document.querySelector('#idInput');

async function getMessage(){
    try {
        const res = await fetch("http://localhost:3000/message");

    if (!res.ok){
        throw new Error(`Http Fehler: ${res.status}`);
    }
        const response = await res.json();
        getOutput.value = response.message;

        console.log("Server antwortet: ", response.message);
    }
    catch (error){
        console.error("Fehler beim Abrufen:" , error.message);;
    };
    
};

getButton.addEventListener("click", getMessage);


async function sendMessage(){
    const res = await fetch("http://localhost:3000/message", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            message: postInput.value
        })
    });

    const data = await res.json();
    console.log(data);
};

postButton.addEventListener("click", sendMessage);