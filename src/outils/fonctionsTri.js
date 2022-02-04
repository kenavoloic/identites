const triNom = (a,b) => a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.genre.localeCompare(b.genre);
const triPrenom = (a,b) => a.prenom.localeCompare(b.prenom) || a.nom.localeCompare(b.nom) || a.genre.localeCompare(b.genre);
const triGenre = (a,b) => a.genre.localeCompare(b.genre) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom);
const triDob = (a,b) => new Date(a.dob.toDateString()).getTime() - new Date(b.dob.toDateString()).getTime() || a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom);// || a.genre.localeCompare(b.genre);

const triJourNaissance = (a,b) => new Date(a.jourNaissance).getTime() - new Date(b.jourNaissance).getTime() || a.nom.localeCompare(b.nom) || a.prenom.localeCompare(b.prenom);// || a.genre.localeCompare(b.genre);

const triDepartement = (a,b) => a.villeNaissanceDepartementNumero.localeCompare(b.villeNaissanceDepartementNumero) || a.villeNaissanceNom.localeCompare(b.villeNaissanceNom) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.genre.localeCompare(b.genre);

const triCourriel = (a,b) =>  a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel);

const triVilleResidenceCodePostal = (a,b) => a.villeResidenceCodePostal.localeCompare(b.villeResidenceCodePostal) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel);

const triVilleResidenceNom = (a,b) => a.villeResidenceNom.localeCompare(b.villeResidenceNom) || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel);

const triVilleNaissanceNom = (a,b) => a.villeNaissanceNom.localeCompare(b.villeNaissanceNom) || new Date(a.dob.toDateString()).getTime() - new Date(b.dob.toDateString()).getTime() || a.nom.localeCompare(b.nom) ||  a.prenom.localeCompare(b.prenom) || a.courriel.localeCompare(b.courriel);

const _triAdresse = (a,b) => a.adresseNom.localeCompare(b.adresseNom) || parseInt(a.adresseNumero, 10) - parseInt(b.adresseNumero, 10) || a.villeResidenceCodePostal.localeCompare(b.villeResidenceCodePostal) || a.villeResidenceNom.localeCompare(b.villeResidenceNom);

const triAdresse = (a,b) => {
    let _a = a.adresse.split(' ');
    let _b = b.adresse.split(' ');
    let aNumero = _a[0];
    let bNumero = _b[0];
    let aNom = _a.slice(1, _a.length).join(' ');
    let bNom = _b.slice(1, _b.length).join(' ');
    return aNom.localeCompare(bNom) || parseInt(aNumero, 10) - parseInt(bNumero, 10) || a.villeResidenceCodePostal.localeCompare(b.villeResidenceCodePostal) || a.villeResidenceNom.localeCompare(b.villeResidenceNom);
};

export {
    triNom, triPrenom, triGenre, triDob, triJourNaissance,
    triDepartement, triCourriel,
    triVilleResidenceCodePostal, triVilleResidenceNom, triVilleNaissanceNom,
    _triAdresse, triAdresse
}
