async function recup_data(dir) {
    //renvoi une liste avec tout (dico)
    const response = await fetch(dir);
    const  donnee = await response.json();
    return donnee
}



async function filtre(){

    let nom = String(document.getElementById("nom").value); //on recup le nom par l'id
    let lst_donnee = await recup_data("/json/lst_personne.json"); //on recup la liste de data des personnes 
    let lst_salles = await recup_data("/json/lst_salles.json"); //on recup la liste de data des salles

    let lst_salles_ren =[]; //on crée la liste des salles

    for(id_nom in lst_donnee){
        if(lst_donnee[id_nom].NOM == nom){ 
            console.log("test022");
            for(tag in lst_salles){ //oncherche la salle avec le TAG
                if(lst_salles[tag].TAG == lst_donnee[id_nom].LV1){  //on compare le tag de la salle avec le tag de la personne LV1
                    console.log(lst_salles[tag].SALLE) 
                    console.log("test")
                    lst_salles_ren.push(lst_salles[tag]) //on ajoute le cour dans la liste des cours

                }
                if(lst_salles[tag].TAG == lst_donnee[id_nom].LV2){  //on compare le tag de la salle avec le tag de la personne LV2
                    lst_salles_ren.push(lst_salles[tag]) 
                    console.log(lst_salles[tag].SALLE)
                }
            }
        }
    }
    display(lst_salles_ren) //on affiche la liste des salles
}

async function display(lst_salles){
    let div = document.getElementById("display") //on recup le div par l'id
    div.innerHTML = "" //on vide le div
    for(i in lst_salles){
        console.log(lst_salles[i]["PROF"])
        for(key in lst_salles[i]){ 
            console.log(key)
            div.innerHTML +=key + " : " + lst_salles[i][key] + "<br>" //on ajoute la salle dans le div
        }
    }
}
