//seleziono l'out in pagina
const emailsOut = document.getElementById("emails-out");
const runBtn = document.getElementById("run-btn")
//seleziono end point di boolean
const endPoint = "https://flynn.boolean.careers/exercises/api/random/mail";

//chiamo la funzione che genera le 10 mail assegnando il tutto a una const


runBtn.addEventListener("click",
    function(){
    emailsOut.innerText = "";
    const myMailList = generateTenMails();
    }
)


function generateTenMails() {
let result = [];
//richiedo le mail e intanto le scrivo in pagina (10 volte)
for (let i = 0; i < 10; i++){
    axios.get(endPoint)
        .then(risposta => {
            //in caso di successo
            let randomMail = risposta.data.response;
            result.push(randomMail);
            //manda le mail in pagina
            let newLi = document.createElement("li");
            newLi.innerText = randomMail;
            emailsOut.appendChild(newLi);
        })
        .catch(error =>{
            //in caso di errore
            console.error(error);
        })
    }
    console.log(result); 
    return result
}


