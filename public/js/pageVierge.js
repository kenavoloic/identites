const entetes = [
    {"id":"rang", "texte":"Rang"},
    {"id":"genre", "texte":"Genre"},
    {"id":"nom", "texte":"Nom"},
    {"id":"prenom", "texte":"Prénom"},
    {"id":"courriel", "texte":"Courriel"},
    {"id":"villeResidenceCodePostal", "texte":"Code postal"},
    {"id":"villeResidenceNom", "texte":"Ville"},
    {"id":"adresse", "texte":"Adresse"},
    {"id":"jourNaissance", "texte":"Naissance"},
    {"id":"villeNaissanceNom", "texte":"Ville"},
    {"id":"villeNaissanceDepartementNumero", "texte":"Dpt"}
];



const tableau = (corps) => {
    const df = new DocumentFragment();
    const table = document.createElement('table');
    table.setAttribute('id', 'tableau');
    const thead = document.createElement('thead');
    thead.setAttribute('id','colonnes');
    const tr = document.createElement('tr');
    let ths = entetes.map((id, texte) => {
	let th = document.createElement('th');
	th.setAttribute('id',id);
	th.setAttribute('data-booleen', true);
	th.appendChild(document.createTextNode(texte));
	return th;	
    });
    ths.forEach(x => tr.appendChild(x));
    thead.appendChild(ths);
    table.appendChild(thead);
    table.appendChild(corps);
    df.appendChild(table);
    return df;
    
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

window.addEventListener('DOMContentloaded', function(e) {

    if(sessionStorage.getItem('rangBooleen') === true){
	let data = JSON.parse(sessionStorage.getItem('rangs'));
	let corps = createCorps(data);
	let tableau = tableau(corps);
	document.getElementsByTagName('body').appendChild(tableau);
    }
});
