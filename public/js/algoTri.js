const _listeMethodes = [
    ['rangC', (a,b) => a.rang - b.rang],
    ['rangD', (a,b) => b.rang - a.rang],
    
    ['nomC', (a,b) => a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom)],
    ['nomD', (a,b) => b.nom.localeCompare(a.nom) || a.prenom.localeCompare(b.prenom)],
    
    ['prenomC', (a,b) => a.prenom.localeCompare(b.prenom) || a.nom.localeCompare(b.nom)],
    ['prenomD', (a,b) => b.prenom.localeCompare(a.prenom) || a.nom.localeCompare(b.nom)],
    
    ['genreC', (a,b) => a.genre.localeCompare(b.genre) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom)],
    ['genreD', (a,b) => b.genre.localeCompare(a.genre) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom)],
    
    ['villeNaissanceDepartementNumeroC',  (a,b) => a.villeNaissanceDepartementNumero.localeCompare(b.villeNaissanceDepartementNumero, 'fr', {numeric:true}) || a.villeNaissanceNom.localeCompare(b.villeNaissanceNom, 'fr', {numeric:true}) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.genre.localeCompare(b.genre)],
    ['villeNaissanceDepartementNumeroD',  (a,b) => b.villeNaissanceDepartementNumero.localeCompare(a.villeNaissanceDepartementNumero, 'fr', {numeric:true}) || b.villeNaissanceNom.localeCompare(a.villeNaissanceNom, 'fr', {numeric:true}) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.genre.localeCompare(b.genre)],
    
    ['courrielC', (a,b) => a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel)],
    ['courrielD', (a,b) => b.nom.localeCompare(a.nom) ||  a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel)],
    
    ['villeResidenceCodePostalC', (a,b) => a.villeResidenceCodePostal.localeCompare(b.villeResidenceCodePostal) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel)],
    ['villeResidenceCodePostalD', (a,b) => b.villeResidenceCodePostal.localeCompare(a.villeResidenceCodePostal) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel)],
    
    ['villeResidenceNomC', (a,b) => a.villeResidenceNom.localeCompare(b.villeResidenceNom, 'fr', {numeric:true}) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel)],
    ['villeResidenceNomD', (a,b) => b.villeResidenceNom.localeCompare(a.villeResidenceNom, 'fr', {numeric:true}) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel)],
    
    ['jourNaissanceC', (a,b) => {
	let _a = chaineDate(a.jourNaissance);
	let _b = chaineDate(b.jourNaissance);
	return _a.getTime() - _b.getTime() || a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom);
    }],
    ['jourNaissanceD', (a,b) => {
	let _a = chaineDate(a.jourNaissance);
	let _b = chaineDate(b.jourNaissance);
	return _b.getTime() - _a.getTime() || a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom);
    }],
    
    ['villeNaissanceNomC', (a,b) => {
	let _a = chaineDate(a.jourNaissance);
	let _b = chaineDate(b.jourNaissance);
	return a.villeNaissanceNom.localeCompare(b.villeNaissanceNom, 'fr', {numeric:true}) || _a.getTime() - _b.getTime() || a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel);
    }],
    ['villeNaissanceNomD', (a,b) => {
	let _a = chaineDate(a.jourNaissance);
	let _b = chaineDate(b.jourNaissance);
	return b.villeNaissanceNom.localeCompare(a.villeNaissanceNom, 'fr', {numeric:true}) || _b.getTime() - _a.getTime() || a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel);
    }],
    
    ['adresseC', (a,b) => {
	let _a = a.adresse.split('');
	let _b = b.adresse.split('');
	let aNumero = parseInt(_a[0],10);
	let bNumero = parseInt(_b[0], 10);
	let aNom = _a.slice(1, _a.length).join('');
	let bNom = _b.slice(1, _b.length).join('');
	return aNom.localeCompare(bNom) || aNumero - bNumero || a.villeResidenceCodePostal.localeCompare(b.villeResidenceCodePostal) || a.villeResidenceNom.localeCompare(b.villeResidenceNom);
    }],
    ['adresseD', (a,b) => {
	let _a = a.adresse.split('');
	let _b = b.adresse.split('');
	let aNumero = parseInt(_a[0],10);
	let bNumero = parseInt(_b[0], 10);
	let aNom = _a.slice(1, _a.length).join('');
	let bNom = _b.slice(1, _b.length).join('');
	return bNom.localeCompare(aNom) || bNumero - aNumero || a.villeResidenceCodePostal.localeCompare(b.villeResidenceCodePostal) || a.villeResidenceNom.localeCompare(b.villeResidenceNom);
    }]
];
