# FauxTexte
Moteur de génération aléatoire de données.

Le faux-texte aléatoire produit contient les lettres, accents et signes de ponctuation propres à la graphie de la langue française. Il en va de même pour les patronymes et les prénoms. Par ailleurs, si les adresses produites sont entièrement fictives, les noms de communes sont authentiques. Ils correspondent aux vrais départements français ainsi qu’aux régions actuelles.

*FauxTexte* est exclusivement écrit en JavaScript.

## Constructeur

```javascript
const faux = new FauxTexte(seed, mpp={minimum:6, maximum:12}, ppp={minimum:3, maximum:6}, np = 23);
```

**seed**, chaîne de caractères, graine aléatoire.  
**mpp**, *entier*, nombre de mots par phrase.  
**ppp**, *entier*, nombre de phrases par paragraphes.  
**np**, *entier*, nombre premier.  

```javascript
const faux = new FauxTexte("Louison Bobet");
```

## Méthodes

### Texte

#### FauxTexte.mot()
Retourne une chaîne de caractères.
```javascript
const titre = faux.mot();
```

#### FauxTexte.mots(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const sixMots = faux.mots(6);
```

#### FauxTexte.phrase()
Retourne une chaîne de caractère.
Toute phrase est ponctuée.  Elle commence par une capitale et  se termine soit par un point, un point d’interrogation ou un point d’exclamation. Sa longueur dépend du paramètre *mpp*, mots par phrase, paramètre défini dans le constructeur.
```javascript
const introduction = faux.phrase();
```
#### FauxTexte.phrases(entier)
```javascript
const presentation = faux.phrase(5);
```

#### FauxTexte.phraseMots(entier)
Retourne une chaîne de caractère.
Il s’agit d’une phrase ponctuée d’une longueur définie par le nombre entier.
```javascript
const resume = faux.phraseMots(250);
```

#### FauxTexte.chaineAlphanumerique(entier)
Retourne une chaîne de caractères d’une longueur déterminée par le nombre entier. La longueur maximale est de 1024 caractères.
```javascript
const referenceTransaction = faux.chaineAlphanumerique(160);
```
#### FauxTexte.paragraphe()
Retourne une chaîne de caractères.

Il s’agit d’un paragraphe constitué d’un ensemble de  phrases. Le nombre de phrases  d’un paragraphe est défini dans le constructeur, **ppp**, nombre de phrases par paragraphes. 
```javascript
const pitch = faux.paragraphe();
```

#### FauxTexte.paragraphes(entier)
Retourne un tableau de chaînes de caractères. 
```javascript
const treizeParagraphes = faux.paragraphes(13);
```

### Chiffres et nombres

#### FauxTexte.zeroUn()
Retourne *0* ou *1*.
```javascript
const civilite = faux.zeroUn() ? "Madame" : "Monsieur";
```

#### FauxTexte.nombreHexaAleatoire(entier)
Retourne une chaîne de caractère dont la longueur est fixée par le nombre entier. La longueur maximale est de 1024 caractères.

```javascript
const taille = 8;
const idFournisseurs = Array.from({length:20}, () => faux.nombreHexaAleatoire(taille));

```

#### FauxTexte.nombreLettres(entier)
Retourne une chaîne de caractères.
*entier* doit être supérieur ou égal à zéro et inférieur ou égal à cent.
La valeur par défaut est zéro.
```javascript
const nombres = [7,18,29,54,98];
const lettres = nombres.map(faux.nombreLettres);
```

#### FauxTexte.aleaCentaine()
Retourne une valeur entière comprise entre *0* et *99*.
```javascript
const pourcentages = Array.from({length:10}, () => faux.aleaCentaine());
```

#### FauxTexte.aleaMillier()
Retourne une valeur entière comprise entre *0* et *999*.
```javascript
const kilometrages = Array.from({length:250}, () => faux.aleaMillier() * 1000);
```


### Noms propres

#### Prénoms

##### FauxTexte.prenomsFeminins(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const mecaniciennes = faux.prenomsFeminins(10);
```

##### FauxTexte.prenomFeminin()
Retourne une chaîne de caractères.
```javascript
const prenomDirectrice = faux.prenomFeminin();
```

##### FauxTexte.prenomsMasculins(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const carrossiers = faux.prenomsMasculins(10);
```

##### FauxTexte.prenomMasculin()
Retourne une chaîne de caractères. 
```javascript
const prenomAssureur = faux.prenomMasculin();
```

##### FauxTexte.prenom()
Retourne un objet *prenom*.
```javascript
const {homme,femme} = faux.prenom();
```

#### Patronymes 

##### FauxTexte.patronyme()
Retourne une chaîne de caractères.
```javascript
const nomDeFamille = faux.patronyme();

```

##### FauxTexte.patronymes(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const nomsDeFamille = faux.patronymes(10);

```

##### FauxTexte.securiteSociale(genre, date, ville, ordre)
Retourne une chaîne de caractères.
*genre* est de type chaîne, soit "1" soit "2".
*data* est un objet javascript.
*ville* est l’objet *ville* décrit ci-après.
*ordre* entier de 1 à 999.

```javascript
const genre = "1";
const date = new Date();
const ville = faux.ville('33063');
const ordre = 1;
const numeroSS = faux.securiteSociale(genre, date, ville, ordre);
console.log(numeroSS);
```


### Voirie

#### Adresse

##### FauxTexte.typeVoie()
Retourne une chaîne de caractères.
```javascript
const voie = faux.typeVoie();
```

##### FauxTexte.typesVoies(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const voies = faux.typesVoies(10);

```

##### FauxTexte.nomVoie()
Retourne un objet.
```javascript
const {nom, booleen} = faux.nomVoie();
```
Certaines dénomination de voie ne nécessitent pas de mention de type de voie. C’est le cas de *Grand’Rue* ou de *Grande Rue*. Dans de tels cas, la valeur de booleen est false.

##### FauxTexte.nomsVoies(entier)
Retourne un tableau de chaînes de caractères.
```javascript
const nomsDeVoie = faux.nomsVoies(10);
```

##### FauxTexte.adresse()
Retourne un objet *adresse*.
```javascript
const domicile = faux.adresse();
const {numero, nom, booleen, type, chaine} = domicile;
```
*numero* numéro de voie, chaîne de caractères.
*nom* nom de voie, chaîne de caractères.
*chaine* adresse, chaîne de caractères.
*booleen* false ou true. Cf *nomVoie*.

#### Villes 

##### FauxTexte.nomVille()
Retourne un objet *ville*.
```javascript
const domicile = faux.nomVille();
const {nom, codeInsee, codeCommune, codePostal, numeroDepartement, nomDepartement, nomRegion} = domicile;
```
Chaînes de caractères :
* *nom*
* *codeInsee*
* *codePostal* 
* *codeCommune*
* *numeroDepartement*
* *nomDepartement*
* *nomRegion*
* *isoRegion*
* *a*
* *pays*

La propriété *a* indique les cas où le nom de la commune commence par l’un des articles suivants : *Le*, *La*, *Les* ou *L’*. Dans de tels cas le nom de la commune est amené à changer selon le contexte grammatical dans lequel il est employé. 

*Le Mans* deviendra *au Mans*, *Le Havre* deviendra *au Havre*, *Les Sables d’Olonne* deviendra *aux Sables d’Olonne*, *L’Île-Rousse* deviendra *à L’Île-Rousse* dans les phrases suivantes.

Je suis né *au Mans*. Je vis *au Havre*. Je passe mes vacances *aux Sables d’Olonne*. J’irai *à L’Île-Rousse* la semaine prochaine.

##### FauxTexte.nomsVilles(entier)
Retourne un tableau d’objets *ville*.
```javascript
const villesFournisseurs = faux.nomsVilles(20);
```

##### FauxTexte.inseeVille(matriculeInsee)
Retourne l’objet *ville* correspondant au matricule INSEE de la commune. Si le matricule est erronné, l’objet *ville* retourné sera celui de la ville de bordeaux. Seules les communes françaises les plus peuplées sont référencées.
```javascript
const bordeaux = faux.inseeVille('33063');
const toulouse = faux.inseeVille('31555');
const gevreyChambertin = faux.inseeVille('21295');
const floracTroisRivieres = faux.inseeVille('48061');
```

##### FauxTexte.ville(matriculeInsee)
Retourne l’objet *ville* correspondant au matricule INSEE de la commune.
```javascript
const mauguio = faux.ville('34154');
console.log(mauguio);
```

##### FauxTexte.listeVilles()
Retourne un tableau contenant les matricules INSEE des communes référencées.
```javascript
const listeDesCommunes = faux.listeVilles();
console.log(listeDescommunes.length);
```

##### FauxTexte.rechercheCommune(chaine)
Retourne un tableau d’objets contenant le nom des communes dont le nom commence par la chaîne. Chaque objet à deux propriétés,  *insee* et *nom*. 
```javascript
const liste = faux.rechercheCommune('bordea');
const {insee, nom} = liste[0];
console.log(liste);
```

#### Départements

##### FauxTexte.listeDepartements()
Retourne un tableau d’objets.
```javascript
const listeDepartements = faux.listeDepartements();
const {depCode, depNom} = listeDepartements[0];
```

##### FauxTexte.departementNom(chaine)
Retourne une chaîne. 
```javascript
const vienne = faux.departementNom('86');
const corseDuSud = faux.departementNom('2a');
const hauteCorse = faux.departementNom('2b');
```

##### FauxTexte.communesDepartementales(chaine)
Retourne un tableau de chaînes.
```javascript
const communes2a = faux.communesDepartementales('2a');
```


##### FauxTexte.communesDepartementales(tableau)
Retourne un tableau de chaînes.
```javascript
const communes2a = faux.communesDepartementales(['2b', '33']);
```

#### Régions 

##### FauxTexte.listeRegions()
Retourne un tableau d’objets.
```javascript
const listeRegions = faux.listeRegions();
const {regionNom, regionIso} = listeRegions[0];
```

##### FauxTexte.communesRegionales(regionIso)
Retourne un tableau des noms de communes d’une région.
*regionIso* est de type chaîne de caractères.

```javascript
const idf = faux.communesRegionales('fr-idf');
```

##### FauxTexte.communesRegionales(tableau)
Retourne un tableau des noms de communes d’une région.
*regionIso* est de type chaîne de caractères.

```javascript
const ultramarines = faux.communesRegionales(['fr-gua','fr-guf','fr-lre','fr-mtq','fr-may']);
```


### Dates
#### FauxTexte.generateurDatePlancherPlafond(chaine1, chaine2)
Retourne l’objet suivant {plancher:anneePlancher, generateur:generateurJourCalendaire, dureeJour:dureeJour}
```javascript
const {generateur:generateurDateConstitutionSociete} = faux.generateurDatePlancherplafond("1.1.2000", "31.12.2010");
```

#### FauxTexte.generateurDateDepuis(chaine)
Retourne l’objet suivant {plancher:anneePlancher, generateur:generateurJourCalendaire, dureeJour:dureeJour}

```javascript
const {generateur:generateurDateConstitutionSociete} = faux.generateurDatePlancherplafond("26/05/1993");
```

#### FauxTexte.jourCalendaire(anneePlancher=1945, anneePlafond=2020)
Retourne un objet *Date*.
```javascript
const dateConstitutionSociete = faux.jourCalendaire(2000,2005);
console.log(dateConstitutionsociete.toLocaleString('fr-FR', {day:'numeric', month:'numeric', year:'numeric'}));

```


### Générateurs de liste

#### FauxTexte.generateurListe(tableau)
Retourne un générateur à partir d’une liste.
```javascript
const listeMarques = ["Alfa Romeo","Audi","BMW","Citroën","Dacia","DS"];
const generateurMarques = faux.generateurListe(listeMarques);
const dixMarques = Array.from({length:10}, () => generateurMarques());
console.log(dixMarques);

```
#### FauxTexte.generateurValeur(entier1, entier2)
Retourne un générateur de valeurs comprises entre *entier1* et *entier2*.
```javascript
    const generateurNombreFournisseurs = faux.generateurValeur(10, 50);
    const dixFournisseurs = Array.from({length:10}, () => generateurNombreFournisseurs());
    console.log(dixFournisseurs);   
```

#### FauxTexte.melangeur()
Retourne une valeur aléatoire comprise entre *0* et *1* et permet de réorganiser un tableau en indexant chacun de ses éléments.

```javascript
const magasins = ["Bordeaux", "Lille", "Lyon",  "Marseille", "Montpellier", "Nantes", "Nice",  "Paris", "Rennes", "Strasbourg", "Toulouse"];
const l1 = magasins.map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
console.log(l1);

const l2 = magasins.map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
console.log(l2);

const l3 = magasins.map(x => ({tri: faux.melangeur(), valeur:x})).sort((a,b) => a.tri - b.tri).map(x => x.valeur);
console.log(l3);
```

### Seed

```javascript
const seed = faux.graineActuelle();
```

Il n’est pas possible de modifier la *seed*. Il faut instancier un nouvel objet *FauxTexte*. En voici une une illustration simplifiée :
```javascript
let fauxtexte1 = new FauxTexte('Louison Bobet');
console.log(fauxtexte1.mots(3));

fauxtexte1 = new FauxTexte('Roger Walkowiak');
console.log(fauxtexte1.mots(3));

```

### Prédicat
Faux.commune_p(chaine)
Faux.commune_p(tableau)

Retourne une chaine ou un tableau de chaînes.
Valide l’existence du code INSEE d’une commune. S’il n’existe pas, c’est celui de la ville de Bordeaux, *33063*, qui est retourné.
```javascript
const liste = ['31555','21295','48061','31556']; // Le dernier code est invalide donc il sera remplacé par *33063*.
const listeValidee = faux.communes(liste);

const singleton = '33063';
const codeValide = faux.communes(singleton);
```

