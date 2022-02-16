import FauxTexte from 'FauxTexte';

import  {quantiteRequise, xchar} from './outils/index.js';

import {triDates, triPatronyme, triCodePostal, capitale, capitalisationPrenom, dureeJour} from './outils/index.js';

const deuxChar = xchar(2);
const troisChar = xchar(3);
const formatDepartementNumero = envoi => envoi.length === 3 ? envoi : (envoi.length === 1) ? deuxChar(envoi) : envoi;

const formatChaineDate = new Intl.DateTimeFormat('fr-FR', {dateStyle:'full', timeStyle:'medium'});
const formatSeed = new Intl.DateTimeFormat('fr-FR', {dateStyle:'full', timeStyle:'medium'});

const formatDob = new Intl.DateTimeFormat('fr-FR', {dateStyle:'full'});
const formatDateFormulaire = new Intl.DateTimeFormat('fr-FR', {dateStyle: 'short'});
const formatDateCourt = new Intl.DateTimeFormat('fr-FR', {dateStyle: 'short'});

const regexpDate = new RegExp(/[.:\s\à]/g);

const suppressionCaractere = chaine => {
    const listeNoire = new Set(['’', '\'', '-', ' ']);
    const retour = chaine.split('').map(x => listeNoire.has(x) ? '_' : x).join('');
    return retour;    
};

const date_p = envoi => (envoi instanceof Date);
const chaine_p = envoi => (typeof envoi === 'string');

const chaineDate = chaine => {
    let [jour, mois, annee, h=0, mn=1, s=0] = chaine.split(/[- \/\*\.:]/);
    mois = isNaN(mois) ? 0 : (mois-1)%12;
    return new Date(Date.UTC(annee, mois, jour, h, mn, s));
};

const horodateur = () => {
    let d = new Date();
    let _h = new Intl.DateTimeFormat('fr-FR', {timeStyle:'medium'});
    let _t = new Intl.DateTimeFormat('fr-FR', {dateStyle:'short'});
    let heure = _h.format(d).split(':').join('_');
    let jour = _t.format(d).split('/').reverse().join('_');
    return `${jour}_${heure}`;
};

const datesParDefaut = () => {
    let t = new Date();
    let date1 = new Date(t.getTime());
    let date2 = new Date(t.getTime());
    date1.setFullYear(date1.getFullYear() - 30);
    date2.setFullYear(date2.getFullYear() - 20);
    return {date1:date1, date2:date2};    
};

const _generateurDates = ft => (d1, d2) => {

    const {date1,date2} = datesParDefaut();
    const j1 = date_p(d1) ? d1 : chaine_p(d1) ? chaineDate(d1) : date1;
    const j2 = date_p(d2) ? d2 : chaine_p(d2) ? chaineDate(d2) : date2;
    const [plancher, plafond] = [j1,j2].sort((a,b) => a.getTime() - b.getTime());    
    const ecart = (plafond.getTime() - plancher.getTime())/dureeJour();
    
    const genJour = ft.generateurValeur(0, ecart);
    const genHeures = ft.generateurValeur(0,24);
    const genMinutes = ft.generateurValeur(0,60);
    const genSecondes = ft.generateurValeur(0,60);

    const _nouveauJour = () => {
	let jour = new Date(plancher.getTime() + genJour()*dureeJour());
	jour.setHours(genHeures());
	jour.setMinutes(genMinutes());
	jour.setSeconds(genSecondes());
	return jour;	
    };

    return _nouveauJour;
};

const _xyz = ft => envoi => {
    let retour = {genre:null, prenom:null, valeurGenre:null};
    switch(envoi){
    case 'h':
	retour.hommeFemmeGenre='h';
	retour.hommeFemmePrenom = capitalisationPrenom(ft.prenomMasculin());
	retour.valeurGenre = 1;
	break;
    case 'f':
	retour.hommeFemmeGenre='f';
	retour.hommeFemmePrenom = capitalisationPrenom(ft.prenomFeminin());
	retour.valeurGenre = 2;
	break;
    default:
	let choix = ft.zeroUn();
	retour.hommeFemmeGenre = choix === 0 ? 'f' : 'h';
	retour.hommeFemmePrenom = retour.hommeFemmeGenre === 'f' ? capitalisationPrenom(ft.prenomFeminin()) : capitalisationPrenom(ft.prenomMasculin());
	retour.valeurGenre = choix === 0 ? 2 : 1;
	break;	
    };
    return retour;
};

const genre_p = envoi => ['f','h','x'].includes(String(envoi).toLowerCase()) ? String(envoi).toLowerCase() : 'f';

const decoupeChaineZone = liste => liste.reduce((retour, x) => {
    let c = {tableau: String(x).split(/[: ]/), booleen:Boolean(x)};
    if(c.booleen === true) {
	retour.push(...c.tableau);
    }
    return retour;
}, []);

const choixZone = ft => (determinant, valeur) => {

    let retour = null;
    valeur = String(valeur).trim().split(/[: ]/);

    switch(determinant){
    case 'france':
	retour = ft.generateurListe(ft.listeVilles());
	break;
    default:
	retour = ft.generateurListe(ft.listeVilles());
	break;
    case 'ville':

	retour = ft.generateurListe([...new Set(ft.communes(valeur))]);
	break;
    case 'departement':
	retour = ft.generateurListe([...new Set(ft.communesDepartementales(valeur))]);
	break;
    case 'region':
	retour = ft.generateurListe([...new Set(ft.communesRegionales(valeur))]);
	break;
    case '999':	
	retour = () => ft.nomVille();
	break;
    };
    return retour;

};

const defautLieu = {determinant:'france',valeur:null};
const defautSeed = () => 'Louison Bobet';
const seedCalendaire = () => formatSeed.format(new Date()).split(" ").join('');


//////////////////////////////////////////////////////



const Modele = function(seed) {
    
    //seed = seed ?? seedCalendaire();
    seed = seed || seedCalendaire();
    
    const ft = new FauxTexte(seed);
    const xyz = _xyz(ft);
    const _dateNaissance = _generateurDates(ft);
    const {date1, date2} = datesParDefaut();
    const lieu = choixZone(ft);

    let donnees = null;
    let parametres = null;

    const getSeed = () => seed;

    const getDonnees = () => donnees;
    const getParametres = () => parametres;

    const plancherPlafond = () => ({d1:formatDateFormulaire.format(date1), d2:formatDateFormulaire.format(date2)});

    const rechercheInsee = chaine => ft.rechercheCommune(chaine);

    const identite = (params) => {
	let {quantite, genre, plancher, plafond, determinant1, valeur1, determinant2, valeur2} = params;
	const _villeNaissance = lieu(determinant1, valeur1);
	const _villeResidence = lieu(determinant2, valeur2);

	const dateNaissance = _dateNaissance(plancher, plafond);
	params.seed = seed;
	params.horodateur = horodateur();
	return {requete:params};//, data:retour.sort(triNom)};
    }

    const identites = (params) => {

	let {quantite, genre, plancher, plafond, determinant1, valeur1, determinant2, valeur2} = params;

	const _villeNaissance = lieu(determinant1, valeur1);
	const _villeResidence = lieu(determinant2, valeur2);

	const dateNaissance = _dateNaissance(plancher, plafond);

	params.seed = seed;
	params.horodateur = horodateur();

	const retour = Array.from({length:quantite}, () => {

	    let nom = ft.majusculePremiereLettre(ft.patronyme());

	    let {hommeFemmeGenre, hommeFemmePrenom, valeurGenre} = xyz(genre);
	    let dob = dateNaissance();
	    let ordre = ft.aleaMillier();

	    let villeNaissance = ft.ville(_villeNaissance());
	    let villeResidence = ft.ville(_villeResidence());

	    let adresse = ft.adresse();
	    let courriel = `${hommeFemmePrenom}.${nom}@${villeResidence.nom}.${villeResidence.numeroDepartement}.fr`;
	    courriel = suppressionCaractere(courriel);

	    return {
		nom:nom,
		prenom:hommeFemmePrenom,
		genre:hommeFemmeGenre,
		dob:dob,
		jourNaissance: formatDateCourt.format(dob),
		courriel:courriel.toLowerCase(),
		ss: ft.securiteSociale(valeurGenre, dob, villeNaissance, ft.aleaMillier()),
		adresse: adresse.chaine,
		adresseNumero: adresse.numero,
		adresseNom: adresse.chaine.split(' ').slice(1,adresse.chaine.split(' ').length).join(" "),

		villeResidenceInsee:villeResidence.codeInsee,
		villeResidenceNom:villeResidence.nom,
		villeResidenceCodePostal:villeResidence.codePostal,
		villeResidenceDepartementNom:villeResidence.nomDepartement,
		villeResidenceDepartementNumero:villeResidence.numeroDepartement,

		villeNaissanceInsee:villeNaissance.codeInsee,
		villeNaissanceNom:villeNaissance.nom,
		villeNaissanceCodePostal:villeNaissance.codePostal,
		villeNaissanceDepartementNom:villeNaissance.nomDepartement,
		villeNaissanceDepartementNumero:villeNaissance.numeroDepartement
	    };

	});

	parametres = params;
	donnees = retour;
	//return {requete:params, data:retour.sort(triNom)};
	return {requete:params, data:retour};
    };

    const mots = (nombre) => ft.mots(nombre);

    return {
	identites,
	getParametres,
	getDonnees,
	getSeed,
	plancherPlafond,
	mots,
	rechercheInsee
    }

};

export default Modele;
