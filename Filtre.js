async function recup_data(dir) {
    //renvoi une liste avec tout (dico)
    const response = await fetch(dir);
    const  donnee = await response.json();
    return donnee
}



async function filtre(){

    let ID = String(document.getElementById("nom").value); //on recup le nom par l'id
    ID = ID.toUpperCase(); //on met en majuscule
    let lst_donnee = await recup_data("/json/lst_personne.json"); //on recup la liste de data des personnes 
    let lst_salles = await recup_data("/json/lst_salles.json"); //on recup la liste de data des salles

    let nom = ID.split(" ")[1]; //on recup le nom
    let prenom = ID.split(" ")[0]; //on recup le prenom

    console.log(nom)
    let lst_salles_ren =[]; //on crée la liste des salles

    for(id_nom in lst_donnee){
        if(lst_donnee[id_nom].NOM == nom && lst_donnee[id_nom].Prénom.toUpperCase() == prenom){ //si le nom et le prenom sont dans la liste
            for(tag in lst_salles){ //oncherche la salle avec le TAG
                if(lst_salles[tag].TAG == lst_donnee[id_nom].LV1){  //on compare le tag de la salle avec le tag de la personne LV1

                    lst_salles_ren.push(lst_salles[tag]) //on ajoute le cour dans la liste des cours

                }
                if(lst_salles[tag].TAG == lst_donnee[id_nom].LV2){  //on compare le tag de la salle avec le tag de la personne LV2
                    lst_salles_ren.push(lst_salles[tag]) 
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
        for(key in lst_salles[i]){ 
            div.innerHTML += key  + " : " + lst_salles[i][key] + "<br>" //on ajoute la salle dans le div
        }
    }
}


$(document).ready(function() {
    $(window).keydown(function(event){
      if(event.keyCode == 13) {
        event.preventDefault();
        filtre();
        return false;
      }
    });
  });