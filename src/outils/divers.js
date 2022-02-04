const quantiteRequise = envoi => parseInt(envoi, 10) > 0 ? parseInt(envoi, 10) : 1;
const triDates = (a,b) => a.getTime() - b.getTime();
const triPatronyme = (a,b) => a.nom.localeCompare(b.nom);
const triCodePostal = (a,b) => a.codePostal.localeCompare(b.codePostal);
const dateFR = date => date.toLocaleString('fr-FR', {weekday: 'long', day:'numeric', month:'long', year:'numeric'});
const capitale = chaine => `${chaine.charAt(0).toUpperCase()}${chaine.slice(1)}`;
const capitalisationPrenom = chaine => chaine.split('-').map(x => x[0].toUpperCase() + x.substring(1)).join('-');
const xchar = nombre => chaine => String(chaine).padStart(nombre, '0');
const formatDepartementNumero = envoi => envoi.length === 3 ? envoi : (envoi.length === 1) ? deuxChar(envoi) : envoi;
const dureeJour = () => 24 * 3600 * 1000;

export {
    quantiteRequise,
    triDates, triPatronyme, triCodePostal,
    dateFR,
    capitale, capitalisationPrenom,
    xchar,
    formatDepartementNumero,
    dureeJour
};
