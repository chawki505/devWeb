// Question 1 : écrire la fonction compterElements
function compterElements(selecteur) {
	var x = document.querySelectorAll(selecteur)
	return x.length
}
console.log(compterElements("section")); //4
console.log(compterElements("#footer-area .footer-segment")); //4
console.log(compterElements("#sidebar a")); //6

// Question 2:

//afficher :
//le nombre total de liens dans la page web ;
//la cible du premier et du dernier lien.
function compterElements2(selecteur) {
	var lien = null
	var taille = document.querySelectorAll('a').length;

	if (selecteur == "premier") {
		lien = document.querySelectorAll('a')[0].href;
	}
	if (selecteur == "dernier") {
		lien = document.querySelectorAll('a')[taille - 1].href;
	}

	return lien;

}
console.log(compterElements("a")); //22
console.log(compterElements2("premier")); //file:///C:/Users/Admin/Desktop/WEB/projettp/Acceuil.html
console.log(compterElements2("dernier")); // file:///C:/Users/Admin/Desktop/WEB/projettp/fin.html

//Question 3:

//Modifiez le fichier cours.js afin d'ajouter sous la liste Liens importants un paragraphe contenant
//un lien vers l'URL suivante : https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation.
//voir le fichier index.html
function addLienListe() {
	var lien1 = document.createElement('li');
	var lien2 = "https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation";
	var path = "#sidebar ul"

	lien1.innerHTML = '<a href ="' + lien2 + '"> Autre  <a/>';

	document.querySelector('#sidebar ul').appendChild(lien1);
}

addLienListe();


//Question 4

//avec le code initial ci-dessous, qui définit un tableau de chaînes de caractères.
// Liste de nos pages web
var contact = ["http://Facebook.fr/compagnie", "http://Twitter/compagnie", "http://Google+/compagnie"];

// TODO : ajouter la liste de ces pages, dans la div "asides" Nous rejoindre

// Complétez ce fichier afin d'ajouter la liste des liens sur la page web.
// Vous devez utiliser le tableau  contact et chaque lien doit être cliquable.﻿﻿
//changez la taille au besoin


function addLienListe2(contact) {

	for (var i = 0; i < contact.length; i++) {
		var lien = document.createElement('li');
		var path = "#sidebar .follow ul";
		lien.innerHTML = '<a href ="' + contact[i] + '"> lien ' + (i + 1) + '<a/>';
		document.querySelector('#sidebar .follow ul').appendChild(lien);
	}
}

addLienListe2(contact);

//Question 5

/*ajouter du code qui permet de modifier la couleur de la bordure des quatre éléments div
lorsque l'utilisateur appuie sur la touche S qui indique la grande section (rouge), H qui indique header
(jaune), F qui indique footer (vert) ,N qui indique nav (noir) , a aside en (bleu).
 */


// utiliser cette indication
/*
// Gestion de l'appui sur une touche du clavier produisant un caractère
document.addEventListener("keypress", function (e) {
    console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));
});
*/

document.addEventListener("keypress", function(e) {
	console.log("Vous avez appuyé sur la touche " + String.fromCharCode(e.charCode));

	switch (String.fromCharCode(e.charCode)) {
		case 's':
			document.querySelector('#main').style.border = "solid 5px red";
			break;
		case 'h':
			document.querySelector('header').style.border = "solid 5px yellow";
			break;
		case 'f':
			document.querySelector('#footer-area').style.border = "solid 5px green";
			break;
		case 'n':
			document.querySelector('.menu').style.border = "solid 5px black";
			break;
		default:
			console.log("n'existe pas dans body");
			break;
	}

});
