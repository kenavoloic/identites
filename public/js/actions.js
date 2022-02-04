//_listeMethodes est importé depuis algoTri.js

window.addEventListener('load', function(e){
    const extractionDonneesLigne = rang => Object.fromEntries(new Map([...rang.cells].map(x => [x.className, x.firstChild.data])));
    let _lignes = document.getElementById('lignes').getElementsByTagName('tr');
    let lignes = [..._lignes].map(extractionDonneesLigne);
    sessionStorage.setItem('rangs', JSON.stringify(lignes));
    sessionStorage.setItem('rangBooleen', true);
});

const chaineDate = chaine => {
    let [jour, mois, annee, h=0, mn=1, s=0] = chaine.split('/')
    mois = isNaN(mois) ? 0 : (mois-1)%12;
    return new Date(Date.UTC(annee, mois, jour, h, mn, s));
};


const listeMethodes = new Map(_listeMethodes);
const methodesTri = envoi => listeMethodes.has(envoi) ? listeMethodes.get(envoi) : listeMethodes.get('rangC');
const extractionDonneesLigne = rang => Object.fromEntries(new Map([...rang.cells].map(x => [x.className, x.firstChild.data])));

const ecouteurs = (x, index) => {
    x.addEventListener('click', (e) => {
	let nomMethodeTri = x.dataset.booleen === 'true' ? `${x.id}C`: `${x.id}D`;
	let methode = methodesTri(nomMethodeTri);
	let booleen = x.dataset.booleen === 'true' ? 'false' : 'true';
	x.dataset.booleen = booleen;
	let data = JSON.parse(sessionStorage.getItem('rangs')).sort(methode);
	sessionStorage.setItem('rangs', JSON.stringify(data));

	let nouveau = creationCorps(data);
	let ancien = document.getElementById('lignes');
	let parent = ancien.parentNode;
	parent.replaceChild(nouveau, ancien);	
    });
};


const creationCorps = liste => {
    let df = new DocumentFragment();
    let tbody = document.createElement('tbody');
    tbody.setAttribute('id','lignes');
    let trs = liste.map(x => {
	let tr = document.createElement('tr');
	Object.entries(x).forEach(([clef,valeur]) => {
	    let td = document.createElement('td');
	    td.setAttribute('class',clef);
	    td.appendChild(document.createTextNode(valeur));
	    tr.appendChild(td);
	});
	return tr;
    });

    trs.forEach(x => tbody.appendChild(x));
    df.appendChild(tbody);
    return df;    
};

const tableau = document.getElementById('tableau');
tableau.querySelectorAll('th').forEach((x, index) => ecouteurs(x, index));
