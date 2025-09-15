//seleziono l'out in pagina
const emailsOut = document.getElementById("emails-out");

//seleziono end point di boolean
const endPoint = "https://flynn.boolean.careers/exercises/api/random/mail";

//richiedo le mail e intanto le stampo in console
axios.get(endPoint)
    .then(risposta => {
        //in caso di successo
        const result = risposta.data.response;
        console.log(result);
    })
    .catch(error =>{
        //in caso di errore
        console.error(error);
    })