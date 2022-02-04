const dureeJour = 24 * 60 * 60 * 1000;
const dureeSemaine = 7 * (24 * 60 * 60 * 1000);

const dureesMois = { 1:31, 2:29, 3:31, 4:30, 5:31, 6:30, 7:31, 8:31, 9:30, 10:31, 11:30, 12:31 };
const par4_p = x => x % 4 === 0;
const par100_p = x => x % 100 !== 0;
const par400_p = x => x % 400 === 0;

const bissextile_p = annee => {
    let retour = par4_p(annee) && par100_p(annee) ? true : par400_p(annee) ?  true : false;
    return {valeur: annee, booleen: retour};
};

const triObjetsDate = (d1,d2) => d1.getTime() - d2.getTime();

//Formats de date possible 30.5.2020 ou 30 5 2020 ou 30/5/2020 ou 30-5-2020 ou 30*5*2020
//mais également 30.5/2020 ou 30-5/2020...
const decoupeDate = chaine => chaine.split(/[- \/\*\.:]/);

const jCalendaire = chaine => {
    let [j, m, a, h=0, mn=0, s=0] = decoupeDate(chaine);
    let bissextile = bissextile_p(a);
    m = dureesMois[m] ? m : (m % 12) + 1;
    j = (j > dureesMois[m]) ? 1 + j % dureesMois[m] : j;
    j = (m === 2 && j > 28 && bissextile.booleen) ? 1 + j % dureesMois[m] : j;
    return new Date(Date.UTC(a,m,j,h,mn,s));
};

const validationDate = (j,m,a,h=0,mn=0,s=0) => {
    let bissextile = bissextile_p(a);
    m = dureesMois[m] ? m : (m % 12) + 1;
    j = (j > dureesMois[m]) ? 1 + j % dureesMois[m] : j;
    j = (m === 2 && j > 28 && bissextile.booleen) ? 1 + j % dureesMois[m] : j;
    return new Date(Date.UTC(a,m,j,h,mn,s));
};

const dateMajorite = ({j,m,a,h,mn}) => {
    let majorite = a + 18;
    let majorite_bissextile_p = bissextile_p(majorite);
    let j_majorite = ( m === 2 && j>28 && majorite_bissextile_p) ? j :  28;
    let date = `${j}.${m}.${majorite}`;
    let heure = `${String(h).padStart(2,'0')}:${String(mn).padStart(2,'0')}`;
    return {j:j, m:m, a:majorite, h:h, mn:mn, date:date, heure:heure};
    //return new Date(a, m, j, h, mn, 0);
};

const dateEmbauche = ({j,m,a,h,mn}) => validationDate(j,m,a,h,mn);

//Choix volontaire de ne pas de calculer la clef du numero de SS.
const numeroSecuriteSociale = (genre, dob, villeNaissance, ordre) => {
    //corse
    //corse 2a => 20 
    //corse 2b => 20
    //   2 94 05 2a 004 101 999 / 2 94 05 2b 005 101 999
    //=> 2 94 05 20 004 101 999
    //justification : les numéros insee des communes de l’ancien département de la Corse n'ont pas changé lors de la création des deux départments de Haute-Corse et Corse du Sud. Impossible d'avoir une commune de 2A avec le même numéro qu'une commune de 2B.
    //Dom-Tom
    //Conversion du numéro de département en '97'
    
    let annee = String(dob.getFullYear()).slice(2);
    let mois = dob.getMonth()+1;
    let _dpt = villeNaissance.numeroDepartement;
    let dpt = (_dpt === '2a' || _dpt === '2b') ? '20' : _dpt.startsWith('97') ? '97' : _dpt;
    let commune = villeNaissance.codeCommune;
    let ordreDeNaissance = String(ordre).padStart(3,'0');
    let clef = 'XX';
    return `${genre}.${annee}.${String(mois).padStart(2,'0')}.${String(dpt).padStart(2,'0')}.${String(commune).padStart(3,'0')}.${String(ordreDeNaissance).padStart(3,'0')}.${clef}`;
};

const numeroSecuriteSociale99 = (genre, dob, inseePays, ordre) => {
    let annee = String(dob.getFullYear()).slice(2);
    let mois = dob.getMonth()+1;
    let ordreDeNaissance = String(ordre).padStart(3,'0');
    let pays = inseePays.slice(2);
    let clef = 'XX';
    return `${genre}.${annee}.${String(mois).padStart(2,'0')}.99.${pays}.${ordreDeNaissance}.${clef}`;
    
};

export { dureeJour, dureeSemaine, triObjetsDate, jCalendaire, validationDate, dateMajorite, dateEmbauche,  numeroSecuriteSociale, numeroSecuriteSociale99};

//module.exports =  { dureeJour, dureeSemaine, triObjetsDate, jCalendaire, validationDate, dateMajorite, dateEmbauche,  numeroSecuriteSociale, numeroSecuriteSociale99};
