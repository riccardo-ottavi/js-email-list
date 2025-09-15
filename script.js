//seleziono l'out in pagina
const emailsOut = document.getElementById("emails-out");

//seleziono end point di boolean
const endPoint = "https://flynn.boolean.careers/exercises/api/random/mail";
let result = [];
//richiedo le mail e intanto le stampo in console
for (let i = 0; i < 10; i++){
    axios.get(endPoint)
        .then(risposta => {
            //in caso di successo
            let randomMail = risposta.data.response;
            result.push(randomMail);
        })
        .catch(error =>{
            //in caso di errore
            console.error(error);
        })
}
console.log(result);  
