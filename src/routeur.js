import express from "express";
import path from 'path';
import fs from 'fs';
import {Readable, Transform, pipeline} from 'stream';

import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import Modele from './Modele.js';

let modele = new Modele('naruto');

const itemsAffiches = 250;
const nombreMaximum = 200000;//100000;
const requeteParDefaut = 100;
const {d1,d2} = modele.plancherPlafond();

const _dico = new Map([
    ['france','France'],
    ['departement','Département'],
    ['region','Region'],
    ['ville','Ville'],
    [undefined, false],
    [null, false]
]);

const dico = envoi => _dico.has(envoi) ? _dico.get(envoi) : false;
const fdate = new Intl.DateTimeFormat('fr-FR', {dateStyle:'medium'});
const fTemps = new Intl.DateTimeFormat('fr-FR', {timeStyle:'short'});

const informations = params => {
    let {seed, quantite, plancher, plafond, determinant1, valeur1, determinant2, valeur2, genre, horodateur} = params;
    determinant1 = dico(determinant1);
    determinant2 = dico(determinant2);
    valeur1 = valeur1 === null ? "" : valeur1;
    valeur2 = valeur2 === null ? "" : valeur2;
    let _genre = genre === 'f' ? 'Femme' : genre === 'h' ? 'Homme' : 'Indifférent';
    params.valeur1 = valeur1;
    params.valeur2 = valeur2;
    return {seed:seed, genre:_genre, quantite:quantite, plancher:plancher, plafond:plafond, determinant1:determinant1, valeur1:valeur1, determinant2:determinant2, valeur2:valeur2, horodateur:horodateur};
    
};

const tailleFichier = taille => {
    const tailles = ['octets','Ko','Mo','Go','To'];
    if(taille == 0) return '0 octet';
    let calcul = parseInt(Math.floor(Math.log(taille) / Math.log(1024)));
    //let chaine = String(valeur).padStart(4, ' ');
    return `${Math.round(taille/Math.pow(1024, calcul), 2)} ${tailles[calcul]}`;
    //return `${chaine} ${tailles[calcul]}`;
};


const ecritureFichier = (donnees, datation) => {
    let nom  = `identites_${datation}.json`;
    let chemin = path.join(__dirname, '..', 'public','listes', nom);
    let sortie = fs.createWriteStream(chemin, {encoding: 'utf8'});

    let entree = Readable.from(JSON.stringify(donnees, null, 2));
    
    let traitement = new Transform({
	transform(morceau, encodage, morceauSuivant){
	    this.push(morceau);
	    morceauSuivant();
	},
	flush(morceauSuivant){
	    this.push('\n]');
	    morceauSuivant();
	}
    });

    pipeline(
	entree,
	sortie,
	(erreur) => {
	    if(erreur) console.log(`Problème lors la sauvegarde du fichier ${nom}`, erreur);
	}
    );
};

////////////////////////////////////////////////////////////////////////////////////////////////////



const routeur = express.Router();

routeur.get("/", (requete, reponse) => {
    reponse.render('accueil', {titre:'Identités', plancher:d1, plafond:d2, maximum:nombreMaximum, apercu:itemsAffiches});
});

routeur.get('/formulaire', (requete, reponse) => {
    reponse.render('vierge', {titre:'Formulaire', maximum:nombreMaximum, defaut:requeteParDefaut, plancher:d1, plafond:d2});
});


routeur.get('/resultats', (requete, reponse) => {
    let data = modele.identites(requete.query);
    let {titre, chaine, quantite, plancher, plafond} = informations(requete.query);
    let  parametres = informations(requete.query);
    ecritureFichier(data, data.requete.horodateur);
    reponse.render('resultats', {titre:titre,  parametres:parametres, data:data.data.slice(0,itemsAffiches), maximum:nombreMaximum, defaut:requeteParDefaut, plancher:d1, plafond:d2});    
});

routeur.get('/formulaires', (requete, reponse, next) => {

    if(!reponse.params){
	next();
    }
    let data = modele.identites(requete.query);
    let {titre, chaine, quantite, plancher, plafond} = informations(requete.query);
    let  parametres = informations(requete.query);
    reponse.render('tableau', {titre:titre,  parametres:parametres, data:data.data, maximum:nombreMaximum, defaut:requeteParDefaut});    
});


routeur.get('/seed', (requete, reponse) => {
    reponse.render('modification', {titre: "Modification seed", actuelle:modele.getSeed()});
});

routeur.post('/seed', (requete, reponse) => {
    let m = new Modele(requete.body.nouvelle);
    modele = m;
    reponse.redirect('/seed');
});

routeur.get('/fichier/:nom', (requete, reponse) => {
    let chemin = path.join(__dirname, "..", "public", "listes", requete.params.nom);
    reponse.download(chemin);
    
});

routeur.get('/fichiers', (requete, reponse) => {
    let chemin = path.join(__dirname, "..", "public", "listes");
    let liste = fs.readdirSync(chemin, {withFileTypes: true}).filter(x => !x.isDirectory()).map(x => ({nom:x.name, taille:tailleFichier(fs.statSync(path.join(chemin, x.name)).size)}));
    reponse.render('listes', {titre:'Listes', liste:liste});

});


routeur.get('/regions', (requete, reponse) => {
    //reponse.render('informations', {titre:'Régions, départements et villes'});
    reponse.render('informations', {titre:'Régions'});
});


routeur.get('/ajax', (requete, reponse) => {
    let liste = modele.rechercheInsee(requete.query.lettre).sort((a,b) => a.nom.localeCompare(b.nom) || a.insee.localeCompare(b.insee));
    if(!liste){
	return "";
    }
    reponse.json(liste);
});

export default routeur;
