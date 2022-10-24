async function recup_data(dir) {
    //renvoi une liste avec tout (dico)
    const response = await fetch(dir);
    const  donnee = await response.json()
    return donnee
}



async function filtre(){

    let nom = String(document.getElementById("nom").value) //on recup le nom par l'id
    let lst_donnee = await recup_data("/json/lst_personne.json") //on recup la liste de data
    console.log("test");

    for(id_nom in lst_donnee){
        if(lst_donnee[id_nom].nom == nom){
            console.log(lst_donnee[id_nom]);
        }
    }

}
