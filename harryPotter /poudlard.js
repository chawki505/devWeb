	// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
	var maisons = [
	{
		code: "GR",
		nom: "Gryffondor"
	},
	{
		code: "SA",
		nom: "Serdaigle"
	},
	{
		code: "PS",
		nom: "Poufsouffle"
	},
	{
		code: "SP",
		nom: "Serpentard"
	}
	];

	// Renvoie un tableau contenant quelques personnages d'une maison
	function getPersonnages(codeMaison) {
		switch (codeMaison) {
			case "GR":
			return ["Harry Potter", "Hermione Granger", "Ron Weasley", "Ginny Weasley", "Neville Londubat", "Albus Dumledore"];
			case "SA":
			return ["Luna Lovegood", "Cho Chang", "Padma Patil", "Garrick Olivander"];
			case "PS":
			return ["Cedric Diggory", "Nymphadora Tonks", "Pomona Chourave"];
			case "SP":
			return ["Severus Rogue", "Tom Elvis Jedusor", "Drago Malefoy", "Bellatrix Lestrange"];
			default:
			return [];
		}
	}

	var EltListe = document.getElementById("maison");

	// Gestion de la fin du chargement de la page web
	window.addEventListener("load", function(){


//boucle pour le choix dans le menu option
		for (var i = maisons.length - 1; i >= 0; i--) {
			var option = document.createElement('option');
			option.innerHTML= '<option value="" selected>'+maisons[i].nom+'</option>';
			EltListe.appendChild(option);
		}

// boucle pour afficher les personnages de chaque maison 
		EltListe.addEventListener("change", function(){
				if(EltListe[0].selected == false){
					for (var i = EltListe.length - 1; i >= 0; i--) {
						if(EltListe[i].selected == true){

							var list = getPersonnages(maisons[maisons.length-i].code);
							document.getElementById('persos').innerHTML = '';
							for (var j = list.length - 1; j >= 0; j--) {
								var humain = document.createElement('li');
								humain.innerHTML = '<li>'+list[j]+'</li>';
								document.getElementById('persos').appendChild(humain);
							}
						}
					}
				}else{
					document.getElementById('persos').innerHTML = '';
				}

		});

		});
