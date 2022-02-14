import patronymiques  from './donnees/patronymes.js';
import {masculins, feminins}  from './donnees/prenoms.js';
import {types as tVoies, odonymiques as nVoies}  from './donnees/voirie.js';
import {
    insee_p, 
    departement_p,
    region_p,
    nombreVilles,
    ville,
    inseeCommune,
    inseePostal,
    communeInsee,
    departementNom,
    communes,
    communesRegionales,
    communesDepartementales,
    listeDepartements as _listeDepartements,
    listeRegions as _listeRegions
} from './outils/territoires.js';
import {europe, asie, afrique, amerique, oceanie} from './donnees/pays.js';
import {validationDate, jCalendaire, dureeJour, dureeSemaine, triObjetsDate, numeroSecuriteSociale, numeroSecuriteSociale99}  from './donnees/dates.js';
import dictionnaire  from './donnees/liste00.js';
import {chiffreLettre, lettreChiffre}  from './donnees/nombresEnLettres.js';
import dataRX from './donnees/dataRX.js';
import {nombresPremiers, reducteurGraine}  from './outils/premiers.js';
import {Lmap, iteration, aleaListe, aleaPlancherPlafond, aleaMelangeurTableau}  from './outils/fonctionsLmap.js';
import {taillesPhrase, ponctuationsFortes, virgules}  from './donnees/configurationFauxTexte.js';


const codesInsee = [...inseeCommune.keys()];
const listeVilles = () => codesInsee;
const getCodeInsee = envoi => codesInsee[envoi % codesInsee.length];

const listeDepartements = () => _listeDepartements;
const listeRegions = () => _listeRegions;


const communesMinuscules = [...communeInsee.keys()];


// Graine par défaut
const graineParDefaut = "Louison Bobet";
// inseeEurope, ....
const alphabetSimple = [...'abcdefghijklmnopqrstuvwxyz'];
const chiffres = [...'0123456789'];
const chaine26 = 'abcdefghijklmnopqrstuvwxyz';
const chaine42 = 'aàâæbcçdeéèêëfghiîïjklmnoôœpqrstuùûüvwxyÿz';
const alphanumeriques = [...chaine26.toLowerCase(), ...chaine26.toUpperCase(), ...chiffres];
const alphanumeriquesEtendu = [...chaine42.toLowerCase(), ...chaine42.toUpperCase(), ...chiffres];

const elements = dictionnaire.length;

const FauxTexte = function(seed, mpp={minimum:6, maximum:12}, ppp={minimum:3, maximum:6}, np = 9901) {

    seed = seed ? seed : graineParDefaut;
    //const graine = seed ? reducteurGraine(seed) : reducteurGraine("Louison Bobet");
    const graine = seed ? reducteurGraine(seed) : reducteurGraine(graineParDefaut);

    //np = seed ? reducteurGraine(seed) : 23;
    np = graine;
    const nombrePremier = nombresPremiers(np);

    //const graineActuelle = () => ({graine: graine, seed: seed});
    const graineActuelle = () => seed;

    const motsParPhrase = {minimum: 6, maximum: 12};
    const phraseParParagraphe = {minimum: 3, maximum: 6};

    const generateurListe = liste => {
	const {x:xListe, r:rListe} = dataRX();
	const _generateurListe = Lmap(xListe, rListe);
	const iterationListe = aleaListe(liste.length, nombrePremier);
	const itemListeAleatoire = () => liste[iterationListe(_generateurListe.next().value)];
	return itemListeAleatoire;
    };

    const {x:xMelangeur, r:rMelangeur} = dataRX();
    const generateurMelangeur = Lmap(xMelangeur, rMelangeur);
    const melangeur  = () => generateurMelangeur.next().value;

    const generateurValeur = (entier1, entier2=0) => {
	entier1 = isNaN(entier1) ? 1 : entier1;
	entier2 = isNaN(entier2) ? 0 : entier2;
	const [plancher, plafond] = [entier1, entier2].sort((x,y) => x - y);
	const {x:xValeur, r:rValeur} = dataRX();
	const _generateurValeur = Lmap(xValeur, rValeur);
	const iterationValeur = aleaPlancherPlafond(plancher,  plafond, nombrePremier);
	const itemValeurAleatoire = () => iterationValeur(_generateurValeur.next().value);
	return itemValeurAleatoire;
    };


    const {x:xVille, r:rVille} = dataRX();
    const generateurVille = Lmap(xVille, rVille);
    const iterationVille = aleaListe(nombreVilles, nombrePremier);
    const nomVilleAleatoire = () => iterationVille(generateurVille.next().value);

    const nomsVilles = nombre => Array.from({length:nombre}, () => ville(getCodeInsee(nomVilleAleatoire())));

    const nomVille = () => nomsVilles(1)[0];

    const inseeVille = insee => ville(insee_p(insee), "00000");

    const listeInsee = () => [...inseeCommune.keys()];

    const rechercheCommune = chaine => {
	chaine = chaine.toLowerCase();
	let tri = communesMinuscules.filter(x => x.startsWith(chaine)).map(x => communeInsee.get(x)).map(x => ({insee:x, nom:inseeCommune.get(x)}));
	return tri.sort((a,b) => a.insee.localeCompare(b.insee));
    };

    //Prénoms masculins, féminins
    //Patronymes
    const {x:xFeminins, r:rFeminins} = dataRX();
    const generateurFeminins = Lmap(xFeminins, rFeminins);
    const iterationFeminins = aleaListe(feminins.length, nombrePremier);
    const prenomFemininAleatoire = () => feminins[iterationFeminins(generateurFeminins.next().value)];

    const {x:xMasculins, r:rMasculins} = dataRX();
    const generateurMasculins = Lmap(xMasculins, rMasculins);
    const iterationMasculins = aleaListe(masculins.length, nombrePremier);
    const prenomMasculinAleatoire = () => masculins[iterationMasculins(generateurMasculins.next().value)];

    const {x:xPatronymes, r:rPatronymes} = dataRX();
    const generateurPatronymes = Lmap(xPatronymes, rPatronymes);
    const iterationPatronymes = aleaListe(patronymiques.length, nombrePremier);
    const patronymeAleatoire = () => patronymiques[iterationPatronymes(generateurPatronymes.next().value)];

    const prenomsFeminins = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	let retour = Array.from({length:nombre}, () => prenomFemininAleatoire());
	return retour;
    };

    const prenomFeminin = () => prenomsFeminins(1).toString();

    const prenomsMasculins = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	let retour = Array.from({length:nombre}, () => prenomMasculinAleatoire());
	return retour;
    };

    const prenomMasculin = () => prenomsMasculins(1).toString();

    const prenom = () => ({h:prenomMasculin(), f: prenomFeminin()});

    const patronymes = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	let retour = Array.from({length:nombre}, () => patronymeAleatoire());
	return retour;
    };

    const patronyme = () => patronymes(1).toString();

    //Voirie

    const {x:xTypesVoies, r:rTypesVoies} = dataRX();
    const generateurTypesVoies = Lmap(xTypesVoies, rTypesVoies);
    const iterationTypesVoies = aleaListe(tVoies.length, nombrePremier);
    const typeVoieAleatoire = () => tVoies[iterationTypesVoies(generateurTypesVoies.next().value)];

    const typesVoies = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	let retour = Array.from({length:nombre}, () => typeVoieAleatoire());
	return retour;
    };

    const typeVoie = () => typesVoies(1).toString();

    const {x:xNomsVoies, r:rNomsVoies} = dataRX();
    const generateurNomsVoies = Lmap(xNomsVoies, rNomsVoies);
    const iterationNomsVoies = aleaListe(nVoies.length, nombrePremier);
    const nomVoieAleatoire = () => nVoies[iterationNomsVoies(generateurNomsVoies.next().value)];

    //nomsVoies retourne un object  {nom:"Grande Rue", booleen: false}
    //Si booleen = false, impossible de combiner nom et type de voie
    //10 avenue Grande Rue n'a pas de sens.

    const nomsVoies = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	let retour = Array.from({length:nombre}, () => nomVoieAleatoire());
	return retour;
    }

    const nomVoie = () => nomsVoies(1)[0];

    const adresse = () => {
	let numerotation = generateurValeur(1, 300);//aleaMillier();
	let numero = numerotation();
	numero = (numero === 0) ?  1 : numero;
	let {nom, booleen} = nomVoie();
	let type = typeVoie();
	let chaine = booleen ? `${numero} ${type} ${nom}` : `${numero} ${nom}`;
	return {numero:numero, nom:nom, booleen:booleen, type:type, chaine:chaine};
    };

    
    //Génére un nombre entre 1 et 101.
    const {x:xCentaine, r:rCentaine} = dataRX();
    const generateurCentaine = Lmap(xCentaine, rCentaine);
    const iterationCentaine = aleaPlancherPlafond(1, 101, nombrePremier);
    const aleaCentaine = () => iterationCentaine(generateurCentaine.next().value);

    //Génére un nombre entre 1 et 1001.
    const {x:xMillier, r:rMillier} = dataRX();
    const generateurMillier = Lmap(xMillier, rMillier);
    const iterationMillier = aleaPlancherPlafond(1, 1001, nombrePremier);
    const aleaMillier = () => iterationMillier(generateurMillier.next().value);

    //Retourne soit 1 soit 0.
    const _01 = [0,1];
    const {x:xBinaire, r:rBinaire} = dataRX();
    const generateurBinaire = Lmap(xBinaire, rBinaire);
    const iterationBinaire = aleaListe(_01.length, nombrePremier);
    const zeroUn = () => _01[iterationBinaire(generateurBinaire.next().value)];

    // jours calendaires, date majorité, date d'embauche, numéro sécu
    // Dates entre deux dates

    const generateurDateIntervalle = (chaine1, chaine2) => {
	let d1 = jCalendaire(chaine1);
	let d2 = jCalendaire(chaine2);
	let [plancher, plafond] = [d1,d2].sort(triObjetsDate);
	const nombreJours = Math.abs(plafond.getTime() - plancher.getTime()) / (24 * 60 * 60 * 1000);
	const generateurJourCalendaire = generateurValeur(0, nombreJours);
	return generateurValeur(0, nombreJours);
    };

    const generateurDatePlancherPlafond = (chaine1, chaine2) => {
	let d1 = jCalendaire(chaine1);
	let d2 = jCalendaire(chaine2);
	let [plancher, plafond] = [d1,d2].sort(triObjetsDate);
	const nombreJours = Math.abs(plafond.getTime() - plancher.getTime()) / (24 * 60 * 60 * 1000);
	const generateurJourCalendaire = generateurValeur(0, nombreJours);
	return {plancher:plancher, generateur:generateurJourCalendaire, dureeJour:dureeJour};
    };

    //Dates autour de la date du jour : antérieure ou postérieure

    const generateurDateDepuis = chaine => {
	let d1 = jCalendaire(chaine);
	let d2 = new Date();
	let [plancher, plafond] = [d1,d2].sort(triObjetsDate);
	const nombreJours = Math.abs(plafond.getTime() - plancher.getTime()) / (24 * 60 * 60 * 1000);
	const generateurJourCalendaire = generateurValeur(0, nombreJours);
	return {plancher:plancher, generateur:generateurJourCalendaire, dureeJour:dureeJour};	
    };

    
    const jourCalendaire = (anneePlancher=1945, anneePlafond=2020) => {
	let jj = 1 + (aleaCentaine() % 31);
	let mm = 1 + (aleaCentaine() % 12);
	let aaaa = anneePlancher + (aleaCentaine() % (anneePlafond - anneePlancher));
	let heures = aleaCentaine() % 25;
	let minutes = aleaCentaine() % 61;
	return validationDate(jj, mm, aaaa, heures, minutes);
    };

    const securiteSociale = (genre, dob, villeNaissance, ordre) => numeroSecuriteSociale(genre, dob, villeNaissance, ordre);

    const securiteSociale99 = (genre, dob, inseePays, ordre) => numeroSecuriteSociale99(genre, dob, inseePays, ordre);


    //Retourne un mot tiré de la liste des mots.
    const {x:xMots, r:rMots} = dataRX();
    const generateurMots = Lmap(xMots, rMots);
    const iterationMots = aleaListe(dictionnaire.length, nombrePremier);
    const motAleatoire = () => dictionnaire[iterationMots(generateurMots.next().value)];

    //Retourne la longueur en mots d'une phrase.
    const {x:xLongueurPhrases, r:rLongueurPhrases} = dataRX();
    const generateurLongueurPhrase = Lmap(xLongueurPhrases, rLongueurPhrases);
    const iterationLongueurPhrase = aleaListe(taillesPhrase.length, nombrePremier);
    const aleaLongueurPhrase = () => taillesPhrase[iterationLongueurPhrase(generateurLongueurPhrase.next().value)];

    //Retourne la taille en phrases du paragraphe aléatoire.
    const {x:xParagraphes, r:rParagraphes} = dataRX();
    const generateurParagraphes = Lmap(xParagraphes, rParagraphes);
    const iterationParagraphes = aleaPlancherPlafond(phraseParParagraphe.minimum, phraseParParagraphe.maximum, nombrePremier);
    const aleaParagraphes = () => iterationParagraphes(generateurParagraphes.next().value);

    //const virgule = mot => mot+",";

    const {x:xPonctuationsFortes, r:rPonctuationsFortes} = dataRX();
    const generateurPonctuationsFortes = Lmap(xPonctuationsFortes, rPonctuationsFortes);
    const iterationPonctuationsFortes = aleaListe(ponctuationsFortes.length, nombrePremier);
    const aleaPonctuationsFortes = () => ponctuationsFortes[iterationPonctuationsFortes(generateurPonctuationsFortes.next().value)];

    const {x:xVirgules, r:rVirgules} = dataRX();
    const generateurVirgules = Lmap(xVirgules, rVirgules);
    const iterationVirgules = aleaListe(virgules.length, nombrePremier);
    const aleaVirgules = () => virgules[iterationVirgules(generateurVirgules.next().value)];

    const formatagePhrase = phrase => {

	let temporaire = phrase.slice(0,-1).map(x => {
	    let onOff = zeroUn();
	    return onOff ? x + aleaVirgules() : x;
	});

	temporaire.push(phrase.slice(-1)[0]);
	let pf = aleaPonctuationsFortes();
	let retour = temporaire.join(" ");

	return `${retour}${pf}`;
    };

    // Genèse de chaînes alphanumériques
    const {x:xAlphanumeriques, r:rAlphanumeriques} = dataRX();
    const generateurAlphanumeriques = Lmap(xAlphanumeriques, rAlphanumeriques);
    const iterationAlphanumeriques = aleaListe(alphanumeriques.length, nombrePremier);
    const aleaAlphanumeriques = () => alphanumeriques[iterationAlphanumeriques(generateurAlphanumeriques.next().value)];

    const chaineAlphanumerique = (longueur=8) => {
	longueur = isNaN(longueur) ? 8 : (longueur < 0 || longueur > 1024) ? 8 : longueur;
	let retour = Array.from({length:longueur}, () => aleaAlphanumeriques()).join("");
	return retour;
    };

    //Génèse de nombres dont on donne la taille en chiffre.
    const base16 = [...'0123456789ABCDEF'];
    const {x:xHexadecimal, r:rHexadecimal} = dataRX();
    const generateurHexadecimal = Lmap(xHexadecimal, rHexadecimal);
    const iterationHexadecimal = iteration(16, nombrePremier);
    const alea16 = () => base16[iterationHexadecimal(generateurHexadecimal.next().value)];

    const nombreHexaAleatoire = (nombreChiffres=8) => {
	nombreChiffres = isNaN(nombreChiffres) ? 8 : (nombreChiffres < 0 || nombreChiffres > 1024) ?  8 : nombreChiffres;
	let nombres = Array.from({length:nombreChiffres}, () => alea16());
	return nombres.join("").padStart(nombreChiffres, 0);
    };

    const nombre = (nombreChiffres=8) => nombreHexaAleatoire(nombreChiffres);

    const nombres = (quantite, tailleEnChiffre) => {
	tailleEnChiffre = (tailleEnChiffre === 'undefined') ? 8 : ( isNaN(tailleEnChiffre) ? 8 : tailleEnChiffre);
	return Array.from({length:quantite}, () => nombre(tailleEnChiffre));
    };

    const nombresUniques = (quantite, tailleEnChiffre=4) => {
	let listeEtendue = Array.from({length:quantite*2}, () => nombres(1,tailleEnChiffre)).reduce((retour,x) => [...retour, ...x], []);
	let tri = new Set(listeEtendue);
	return [...tri].sort();
    };

    const formatageNombre = (nombreChiffres=8) => {
	nombreChiffres = isNaN(nombreChiffres) ? 8 : (nombreChiffres < 0) ? 8 : (nombreChiffres > 12) ? 8 : nombreChiffres;        
	let valeur = parseInt(nombreHexaAleatoire(), 10);
	let retour = "${valeur}".slice(nombreChiffres);
	return retour;
    };

    const items = (nombre) => {
	nombre = isNaN(nombre) ? 1 : nombre;
	return Array.from({length:nombre}, () => motAleatoire());
    };

    const mots = (nombre) => {
	nombre = isNaN(nombre) ? 1 : nombre;
	return Array.from({length:nombre}, () => motAleatoire());
    };

    const mot = () => mots(1).toString();

    const majusculePremiereLettre = chaine => `${chaine.charAt(0).toUpperCase()}${chaine.slice(1)}`;

    const phrase = () => {
	let iterations = aleaLongueurPhrase();
	let aleatoires = Array.from({length:iterations}, () => motAleatoire());
	aleatoires[0] = majusculePremiereLettre(aleatoires[0]);
	return Array(formatagePhrase(aleatoires));
    };


    const phrases = nombre => {
	nombre = isNaN(nombre) ? 6 : nombre;
	let retour = Array.from({length:nombre}, () => phrase());
	return [...retour];
    };

    const paragraphe = () => {
	let iterations = aleaParagraphes();
	let retour = Array.from({length:iterations}, () => phrase());
	return retour.join(" ");
    };
    
    const paragraphes = nombre => {
	nombre = isNaN(nombre) ? 1 : nombre;
	return [...Array.from({length:nombre}, () => paragraphe())];
    };

    const phraseMots = nombre => {
	nombre = isNaN(nombre) ? 2 : nombre;
	let temporaire = Array.from({length:nombre}, () => motAleatoire());
	let retour = formatagePhrase(temporaire);
	return `${retour.slice(0,1).toUpperCase()}${retour.slice(1)}`;
    };

    const nombreLettres = (nombre) => {
	nombre = isNaN(nombre) ? 0 : nombre;
	return chiffreLettre(nombre);
    };


    return {
	mot, mots, phrase, phrases,
	phraseMots, chaineAlphanumerique,
	paragraphe, paragraphes,
	
	zeroUn,	nombreHexaAleatoire, nombreLettres,
	aleaCentaine, aleaMillier,

	prenomsFeminins, prenomFeminin,
	prenomsMasculins, prenomMasculin,
	prenom,
	patronymes, patronyme,

	typeVoie, typesVoies,
	nomVoie, nomsVoies,
	adresse,

	nomVille, nomsVilles, inseeVille, listeVilles,
	communes, //commune_p devra remplacer communes lors de la prochaine maj
	
	listeDepartements, departementNom, communesDepartementales,

	listeRegions, communesRegionales,

	generateurDatePlancherPlafond, generateurDateDepuis, jourCalendaire,
	
	generateurListe, generateurValeur,
	melangeur,
	graineActuelle,

	//nombre, nombres, nombresUniques, 
	//nomVoieAleatoire,
	ville, 	 rechercheCommune,
	majusculePremiereLettre,
	securiteSociale, //securiteSociale99
    };
};

export default FauxTexte;
