async function recup_data(dir) {
    //renvoi une liste avec tout (dico)
    const response = await fetch(dir);
    const  donnee = await response.json()
    return donnee
}



async function filtre(){

    let nom = String(document.getElementById("nom").value) //on recup le nom par l'id
    let lst_donnee = await recup_data("/json/lst_personne.json") //on recup la liste de data des personnes 
    let lst_salles = await recup_data("/json/lst_salles.json") //on recup la liste de data des salles
    for(id_nom in lst_donnee){
        if(lst_donnee[id_nom].NOM == nom){
            for(tag in lst_salles){
                if(lst_salles[tag].TAG == lst_donnee[id_nom].LV1){  //on compare le tag de la salle avec le tag de la personne
                    console.log(lst_salles[tag].SALLE)
                }
            }
            console.log("test2");
        }
    }

}
