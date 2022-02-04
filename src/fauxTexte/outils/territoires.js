import {inseeCommune, communeInsee} from '../donnees/inseeCommune.js';
import inseePostal from '../donnees/inseePostal.js';
import prepositions from '../donnees/prepositions.js';
//import listeDR from '../donnees/listeDR.js';
import listeDR from '../donnees/departementsRegions.js';

const listeInsee = [...inseeCommune.keys()];
const listeCommunes = inseeCommune.values();
const nombreVilles = inseeCommune.size;

//["33", {depCode:"33",depNom:"Gironde",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
const defaut = {ville:'33063', depCode:'33', depNom:'gironde', regionCode:75, regionIso:'fr-naq', regionNom:'Nouvelle Aquitaine', regionAlphabetique:"15"};

const bdx = "33063";
const gironde = "33";
const nouvelleAquitaine = 'fr-naq';

const numeroMaximumMetropole = "96";
const ultramarins = ['971','972','973','974','976'];
const corsica = ['2a','2b'];

const regions = [...Array.from(listeDR.values()).reduce((retour, {regionIso}) => retour.add(regionIso), new Set())];
const listeRegions = Array.from(listeDR.values()).reduce((retour, {depCode, regionIso}) => {
    (retour[regionIso] || (retour[regionIso] = [])).push(depCode);
    return retour;
}, {});

const _tableDepartementRegion = new Map([...listeDR.values()].reduce((retour, {depCode, regionIso}) => [...retour, [depCode, regionIso]], []));


const tableDepartementRegion = envoi => _tableDepartementRegion.has(envoi) ? _tableDepartementRegion.get(envoi) : _tableDepartementRegion.get(defaut.depCode);

const _departementNom = new Map([...listeDR.values()].reduce((retour, {depCode, depNom}) => [...retour, [depCode, depNom]], []));

const departementNom = envoi => _departementNom.has(String(envoi)) ? _departementNom.get(String(envoi)) : defaut.depNom;


const departements = Array.from(listeDR.values()).reduce((retour, {depCode}) => [...retour, depCode], []);

const departement_p = envoi => {
    let x = (envoi === null || envoi === undefined) ? defaut.depCode : String(envoi).toUpperCase().padStart(2,'0');
    return departements.includes(x) ? x : defaut.depCode;
};

const insee_p = _insee => {
    _insee = String(_insee).toUpperCase();
    return inseeCommune.has(_insee) ? _insee : defaut.ville;
};

const region_p = envoi => regions.includes(envoi) ? listeRegions[envoi] : listeRegions[nouvelleAquitaine];

const _communesDepartementales = departement => {
    departement = String(departement).toUpperCase();
    return listeInsee.filter(x => x.startsWith(departement_p(departement)));    
};

const cdSingleton = departement => {
    departement = String(departement).toUpperCase();
    return listeInsee.filter(x => x.startsWith(departement_p(departement)));
};

const cdTableau = liste => liste.map(x => cdSingleton(x)).reduce((retour, x) => [...retour, ...x], []);
const communesDepartementales = envoi => Array.isArray(envoi) ? cdTableau(envoi) : cdSingleton(envoi);

const crSingleton = iso => region_p(iso).map(x => communesDepartementales(x)).reduce((retour, x) => [...retour, ...x], []);
const crTableau = liste => liste.map(x => crSingleton(x)).reduce((retour, x) => [...retour, ...x], []);
const communesRegionales = envoi => Array.isArray(envoi) ? crTableau(envoi) : crSingleton(envoi);

const cmnSingleton = x => insee_p(x);
const cmnTableau = liste => liste.map(x => insee_p(x));
const communes = envoi => Array.isArray(envoi) ? cmnTableau(envoi) : cmnSingleton(envoi);


const choixZone = ft => ({determinant, valeur}) => {
    let retour = null;
    switch(determinant){
    case 'france':
	retour = () => ft.nomVille();
	break;
    default:
	retour = () => ft.nomVille();
	break;
    case 'ville':
	retour = ft.generateurListe([...new Set(communes(valeur))]);
	break;
    case 'departement':
	retour = ft.generateurListe([...new Set(communesDepartementales(valeur))]);
	break;
    case 'region':
	retour = ft.generateurListe([...new Set(communesRegionales(valeur))]);
	break;
    case '999':	
	retour = () => ft.nomVille();
	break;
    };
    return retour;
};

const ciudad = (_codeInsee, codeInseePays = '00000') => {
    let chaine = String(_codeInsee);
    let codeInsee = inseeCommune.has(chaine) ? chaine : defaut.ville;
    let nom = inseeCommune.get(codeInsee);
    let postal = inseePostal.get(codeInsee);
    let matricule = codeInsee.startsWith('97') ? codeInsee.substr(0,3) : codeInsee.substr(0,2);
    let departement = departement_p(matricule);
}

const ville = (codeInsee, codeInseePays = '00000') => {
    codeInsee = String(codeInsee);
    codeInsee = inseeCommune.has(codeInsee) ? codeInsee : defaut.ville;
    let nom = inseeCommune.get(codeInsee);
    let postal = inseePostal.get(codeInsee);
    let matricule = codeInsee.startsWith('97') ? codeInsee.substr(0,3) : codeInsee.substr(0,2);
    let departement = departement_p(matricule);
    let codeCommune = codeInsee.slice(2,5).padStart(3, '0');
    let preposition = prepositions.has(codeInsee) ? prepositions.get(codeInsee).a : null;
    //let dr = listeDR.get(departement);
    let dr = listeDR.has(departement) ? listeDR.get(departement) : listeDR.get(defaut.depCode);
    //console.log('territoires ',dr.depCode, codeCommune);
    //return {nom:nom, codeInsee:codeInsee, codeCommune:codeCommune, codePostal:postal, numeroDepartement:dr.depCode, nomDepartement:dr.depNom, nomRegion:dr.regionNom, isoRegion:dr.regionIso, a:preposition, pays:codeInseePays};
    return {nom:nom, codeInsee:codeInsee, codeCommune:codeCommune, codePostal:postal, numeroDepartement:matricule, nomDepartement:dr.depNom, nomRegion:dr.regionNom, isoRegion:dr.regionIso, a:preposition, pays:codeInseePays};
};

export {
    insee_p, departement_p, region_p,
    nombreVilles, ville,
    inseeCommune, inseePostal, communeInsee,
    departementNom,
    communes, communesRegionales, communesDepartementales
}
