function kjøp(){
    let gyldigValidering = true;
    let film=document.getElementById("film");
    if (film.selectedIndex===0){
        document.getElementById("valideringFilm").style.display = "inline";
        gyldigValidering = false;
    } else{
        document.getElementById("valideringFilm").style.display = "none";
    }
    let antall=document.getElementById("antall");
    if (!antall.value || antall.value<1){
        document.getElementById("valideringAntall").style.display = "inline";
        gyldigValidering = false;
    } else{
        document.getElementById("valideringAntall").style.display = "none";
    }
    let fornavn=document.getElementById("fnavn");
    if (!fornavn.value || fornavn.value===""){
        document.getElementById("valideringFornavn").style.display = "inline";
        gyldigValidering = false;
    } else{
        document.getElementById("valideringFornavn").style.display = "none";
    }
    let etternavn=document.getElementById("enavn");
    if (!etternavn.value || etternavn.value===""){
        document.getElementById("valideringEtternavn").style.display = "inline";
        gyldigValidering = false;
    } else{
        document.getElementById("valideringEtternavn").style.display = "none";
    }
    let telefonnr=document.getElementById("tlf");
    const tlfregex=/[0-9]{8}/i;
    if (!telefonnr.value){
        const tlfvalidering=document.getElementById("valideringTlfnr");
        tlfvalidering.style.display = "inline";
        tlfvalidering.innerHTML="Skriv inn telefonnummer";
        gyldigValidering = false;
    } else if (!tlfregex.test(telefonnr.value)){
        const tlfvalidering=document.getElementById("valideringTlfnr");
        tlfvalidering.style.display = "inline";
        tlfvalidering.innerHTML="Ikke gyldig telefonnummer";
        gyldigValidering = false;
    }
    else{
        document.getElementById("valideringTlfnr").style.display = "none";
    }
    let epost=document.getElementById("epost");
    const epostregex=/[a-zA-Z0-9]+[@][a-zA-Z]+[.][a-zA-Z]+/i;
    if (!epost.value){
        const epostvalidering=document.getElementById("valideringEpost");
        epostvalidering.style.display = "inline";
        epostvalidering.innerHTML="Skriv inn epost";
        gyldigValidering = false;
    } else if (!epostregex.test(epost.value)){
        const epostvalidering=document.getElementById("valideringEpost");
        epostvalidering.style.display = "inline";
        epostvalidering.innerHTML="Ikke gyldig epost";
        gyldigValidering = false;
    }
    else{
        document.getElementById("valideringEpost").style.display = "none";
    }
    if (!gyldigValidering){
        return;
    }
    const billett = {
        film: film.value,
        antall: antall.value,
        fornavn: fornavn.value,
        etternavn: etternavn.value,
        telefonnr: telefonnr.value,
        epost: epost.value
    }

    film.selectedIndex=0;
    antall.value="";
    fornavn.value="";
    etternavn.value="";
    telefonnr.value="";
    epost.value="";

    const url ="/lagre";
    $.post(url, billett, function() {
        hentAlle();
    });
}

function slette(){
    document.getElementById("alleBilletter").innerHTML=
        "<tr>" +
        "<td>Film</td>" +
        "<td>Antall</td>" +
        "<td>Fornavn</td>" +
        "<td>Etternavn</td>" +
        "<td>Telefonnr</td>" +
        "<td>Epost</td>" +
        "</tr>";

    $.get("/slettAlle");
}

function hentAlle() {
    $.get( "/hentAlle", function( data ) {
        const allebilletterdiv=document.getElementById("alleBilletter");

        allebilletterdiv.innerHTML = "<tr>" +
            "<td>Film</td>" +
            "<td>Antall</td>" +
            "<td>Fornavn</td>" +
            "<td>Etternavn</td>" +
            "<td>Telefonnr</td>" +
            "<td>Epost</td>" +
            "</tr>";

        for (const billett of data){
            allebilletterdiv.innerHTML+="<tr>" +
                "<td>"+billett.film+"</td>" +
                "<td>"+billett.antall+"</td>" +
                "<td>"+billett.fornavn+"</td>" +
                "<td>"+billett.etternavn+"</td>" +
                "<td>"+billett.telefonnr+"</td>" +
                "<td>"+billett.epost+"</td>" +
                "</tr>";
        }
    });
}
