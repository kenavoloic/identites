import {inseeCommune, communeInsee} from '../donnees/inseeCommune.js';
import inseePostal from '../donnees/inseePostal.js';
import prepositions from '../donnees/prepositions.js';
//import listeDR from '../donnees/departementsRegions.js';
import listeDR from '../donnees/listeDR.js';

// Constantes

const listeInsee = [...inseeCommune.keys()];
const listeCommunes = inseeCommune.values();
const nombreVilles = inseeCommune.size;

const numeroMaximumMetropole = "96";
const ultramarins = ['971','972','973','974','976'];
const corsica = ['2a','2b'];
const defaut = {ville:'33063', depCode:'33', depNom:'gironde', regionCode:75, regionIso:'fr-naq', regionNom:'Nouvelle Aquitaine', regionAlphabetique:"15"};

const listeDepartements = listeDR.map(x => [String(x[1].depCode).padStart(2,'0'), x[1].depNom, x[1].regionIso]);
const listeDepartementNom = listeDR.map(x => [String(x[1].depCode).toUpperCase().padStart(2,'0'), x[1].depNom]);
const listeRegionsDepartements = listeDepartements.reduce((retour, x) => retour.has(x[2]) ? retour.set(x[2], [...retour.get(x[2]), x[0]]) : retour.set(x[2], [x[0]]), new Map());
const listeRegionIsoRegionNom = new Map([...new Set(listeDR.map(x => `${x[1].regionIso},${x[1].regionNom}`))].map(x => x.split(',')));
const listeDepartementsCodeNomRegion = new Map(listeDR.map(x => [String(x[1].depCode).padStart(2,'0'), {depCode:String(x[1].depCode).padStart(2,'0'),depNom:x[1].depNom, regionIso:x[1].regionIso}]));

const departementNom = envoi => {
    let dpt = String(envoi).toUpperCase();
    return listeDepartementNom.has(dpt) ? listeDepartementNom.get(dpt).nom : defaut.depNom;
};

//Prédicats
const insee_p = envoi => {
    envoi = String(envoi).toUpperCase();
    return inseeCommune.has(envoi) ? envoi : defaut.ville;
};

const departement_p = envoi => {
    envoi = String(envoi).toUpperCase();
    return listeDepartementsCodeNomRegion.has(envoi) ? envoi : defaut.depCode;
};

const region_p = envoi => {
    envoi = String(envoi).toLowerCase();
    return listeRegionIsoRegionNom.has(envoi) ? envoi : defaut.regionIso;    
};

//Objet ville
const ville = (codeInsee, codeInseePays = '00000') => {
    codeInsee = String(codeInsee);
    codeInsee = inseeCommune.has(codeInsee) ? codeInsee : defaut.ville;
    let nom = inseeCommune.get(codeInsee);
    let postal = inseePostal.get(codeInsee);
    let numeroDepartement = codeInsee.startsWith('97') ? codeInsee.substr(0,3) : codeInsee.substr(0,2);
    let departement = departement_p(numeroDepartement);
    let codeCommune = codeInsee.slice(2,5).padStart(3, '0');
    let preposition = prepositions.has(codeInsee) ? prepositions.get(codeInsee).a : null;
    let dr = listeDepartementsCodeNomRegion.has(departement) ? listeDepartementsCodeNomRegion.get(departement) : listeDepartementsCodeNomRegion.get(defaut.depCode);
    let nomDepartement = dr.depNom;
    let isoRegion = dr.regionIso;
    let nomRegion = listeRegionIsoRegionNom.get(isoRegion);
    let departementsRegionaux = listeRegionsDepartements.get(isoRegion);
    return {nom:nom, codeInsee:codeInsee, codePostal:postal, numeroDepartement:numeroDepartement, nomDepartement:nomDepartement, isoRegion:isoRegion, nomRegion:nomRegion , departements:departementsRegionaux, a:preposition};
};

//Fonctions INSEE : retournes des listes de matricules INSEE de communes.
const communes = envoi => {
    let liste = Array.isArray(envoi) ? envoi : [envoi];
    liste = liste.map(x => String(x).toLowerCase());
    //Conversion en Set pour éviter tout doublon.
    return [...new Set(liste.map(x => insee_p(x)))];
};

const communesDepartementales = envoi => {
    let liste = Array.isArray(envoi) ? envoi : [envoi];
    //console.table('cd ', liste);
    //Conversion en Set pour éviter tout doublon en cas de présences simultanées de 2A et 2a ou 2B et 2b.
    liste = [...new Set(liste.map(x => String(x).toUpperCase()))];
    return liste.map(x => listeInsee.filter(y => y.startsWith(x))).reduce((retour, x) => [...retour, ...x], []);
};

const communesRegionales = envoi => {
    let liste = Array.isArray(envoi) ? envoi : [envoi];
    liste = liste.map(x => String(x).toLowerCase()).map(region_p);
    let departements = liste.map(x => listeRegionsDepartements.get(x)).reduce((retour, x) => [...retour, ...x], []);
    //Conversion en Set pour éviter tout doublon.
    departements = [...new Set(departements)];
    return communesDepartementales(departements);
};



export {
    insee_p, departement_p, region_p,
    ville,
    communes, communesRegionales, communesDepartementales,
    nombreVilles, 
    inseeCommune, inseePostal, communeInsee,
    
    departementNom,
    listeDepartements,
    listeRegionIsoRegionNom as listeRegions, listeRegionIsoRegionNom as regions
}

//console.table(communesDepartementales(['16','17','18','82']));
//console.table(communesRegionales(['fr-mtq','fr-gua','fr-guf','fr-may','fr-lre']));
//console.table(communesRegionales(['fr-naq']));
//console.table(communesRegionales(['fr-cor']));

//console.log(communesRegionales(['fr-mtq','fr-may']));
//console.table(communes(['31555','86194','33064']));
