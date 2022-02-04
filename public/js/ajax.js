window.addEventListener('load', function(e) {
    
    if(JSON.parse(sessionStorage.getItem('ajaxBooleen')) === true){
	let nouveau = creationTags(JSON.parse(sessionStorage.getItem('ajax')));
	let ancien = document.getElementById('panneau');
	let parent = ancien.parentNode;
	parent.replaceChild(nouveau, ancien);
    }
});

const creationTags = liste => {
    let df = new DocumentFragment();
    let section = document.createElement('section');
    section.setAttribute('id','panneau');
    let divs = liste.map(x => {
	let div = document.createElement('div');
	div.setAttribute('class','nomNumero');
	
	let nom = document.createElement('span');
	nom.setAttribute('class','nomCommune');
	let _nom = document.createTextNode(x.nom);
	nom.appendChild(_nom);
	
	let numero = document.createElement('span');
	numero.setAttribute('class','numeroCommune');
	let _numero = document.createTextNode(x.insee);
	numero.appendChild(_numero);

	div.appendChild(nom);
	div.appendChild(numero);
	return div;	
    });
    divs.forEach(x => section.appendChild(x));
    df.appendChild(section);
    return df;
};


let texte = document.querySelector('input[name="lettre"]');

const recherche = (e) => {
    let chaine = e.target.value.trim();
    chaine = chaine.replace(/\'/g, '’');

    chaine = chaine.length === 0 ? "vide" : chaine;
    
    if(chaine === "vide") {
	return;
    }

    fetch("ajax?lettre="+chaine, {method:'GET'})
	.then(reponse => reponse.json())
    	.then(x => {
	    sessionStorage.setItem('ajax', JSON.stringify(x));
	    sessionStorage.setItem('ajaxBooleen', true);
	    let nouveau = creationTags(x);
	    let ancien = document.getElementById('panneau');
	    let parent = ancien.parentNode;
	    parent.replaceChild(nouveau, ancien);	
	})	      
	.catch(erreur => console.log(erreur));
};

texte.addEventListener('input', recherche);


// let formulaire = document.getElementById('parLettre');

// formulaire.addEventListener("submit", function(e) {
//     e.preventDefault();
//     fetch('ajax?lettre='+e.target.lettre.value, {
// 	method:'GET'
//     })
// 	.then(reponse => reponse.json())
// 	.then(x => {
// 	    sessionStorage.setItem('ajax', JSON.stringify(x));
// 	    sessionStorage.setItem('ajaxBooleen', true);
// 	    //let nouveau = creationListe(x);
// 	    let nouveau = creationTags(x);
// 	    let ancien = document.getElementById('panneau');
// 	    let parent = ancien.parentNode;
// 	    parent.replaceChild(nouveau, ancien);	
// 	})	      
// 	.catch(erreur => console.log(erreur))
// });
