/**
 * @author Joan Vallat
 * @since 2023.09.19
 */

'use strict';

/*****************************************
 Changer arrière plan
 ****************************************/

//Récupération du <body>
const body = document.body;
//version 2 --> document.querySelector('body')

//Récupération de la liste déroulante
const listeBg = document.querySelector('#bg');

//change l'arrière plan
//methode 1
//body.style.backgroundImage = 'url(./img/backgrounds/' + listeBg.value + ')';
//Methode 2
body.style.backgroundImage = `url(./img/backgrounds/${listeBg.value})`

//écouter l'évènement "change"
listeBg.addEventListener('change', function(){
    //affiche une alerte pour s'assurer du fonctionnement
    alert('coucou');
    //Applique le changement
    body.style.backgroundImage = `url(./img/backgrounds/${listeBg.value})`
});


/***************************************
 ENVOI DU FORMULAIRE
 *************************************/

//Récupération du formulaire et des champs mot-de-pass
const formulaire = document.querySelector('form');
const txtPassword = document.querySelector('#pass');
const txtPasswordConfirm = document.querySelector('#confirmPass');

//Écouter l'envoie du formulaire
formulaire.addEventListener('submit',function (event){
    //Stopper l'envoie ou annuler évènement
    event.preventDefault();

    //Si mdp plus petit que 3 caractères
    if (txtPassword.value.length < 3){
        alert('Les mot de pass doit avoir au minimu 3 caractères');
        return; //termine la fonction
    }

    //Si mdp différent
    if (txtPassword.value !== txtPasswordConfirm.value) {
        alert('Mot de pass différents');
        return; //termine la fonction
    }

    //Alerte l'utilisateur
    alert('Compte créer avec succès !')
    formulaire.submit(); //Envoie le formulaire
});
