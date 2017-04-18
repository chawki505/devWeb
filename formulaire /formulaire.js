// Exo: verifiez si les mots de passes saisis sont :
// - identiques
// - longueur min de 6
// - contienent au moins un chiffre

var form = document.getElementById("monFormulaire");

form.addEventListener("submit", function(e) {
	//pour récupérer la valuer d'un composant input "Eltinput.value;""

	var mdp1 = document.getElementById("mdp1").value;
	var mdp2 = document.getElementById("mdp2").value;
	var motif = /[0-9]/;

	//test si il contien un nombre else affiche msg erreur
	if (motif.test(mdp1)) {

		//test si la taille est sup ou egale a 6 else affiche msg erreur
		if (mdp1.length >= 6) {

			//test si les 2 mot de passe sont identique else affiche message d'erreur
			if (mdp1 === mdp2) {

				//test si le check box a ete coché ou non else affiche msg erreur
				if (document.getElementById("conditions").checked) {
					document.getElementById("message").innerHTML = '<span style="color: green;" id="message">Votre demande a été envoyer avec succée ! !</span>';

					//else de la check box
				} else {
					document.getElementById("message").innerHTML = '<span style="color: red;" id="message">Accepter les conditions pour continuer ! !</span>';
				}

				//else de la difference des mdp
			} else {
				document.getElementById("message").innerHTML = '<span style="color: red;" id="message">erreur mot de passe different !</span>';
			}

			//else de la taille
		} else {
			document.getElementById("message").innerHTML = '<span style="color: red;" id="message"> votre mot de passe doit contenire aumoin 6 caractere !</span>';
		}
		//else du nombre dans le mdp
	} else {
		document.getElementById("message").innerHTML = '<span style="color: red;" id="message">votre mot de passe dois contenire aumoin 1 chiffre !</span>';
	}


	e.preventDefault(); //Stop la soumission cad le fonctionnement par default de submit
});
