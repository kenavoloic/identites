const Lmap = function*(x0, r){
    let x = x0;
    while(true){
	x = x * r * (1 -x);
	yield x;
    }
}

const iteration = (longueurListe, nombrePremier) => x => parseInt(x*nombrePremier, 10) % longueurListe;

const aleaListe = (longueurListe, nombrePremier) => x => parseInt(x*nombrePremier, 10) % longueurListe;

const aleaPlancherPlafond = (plancher, plafond, nombrePremier) => x => parseInt(x*nombrePremier, 10) %  (plafond - plancher + 1) ;

const aleaMelangeurTableau = lmap => tableau => {
    const indexation = x => ({tri: lmap.next().value, valeur: x});
    const reclassement = (x, y) => x.tri - y.tri;
    const valeurs = x => x.valeur;
    return tableau.map(indexation).sort(reclassement).map(valeurs);
};

export {Lmap, iteration, aleaListe, aleaPlancherPlafond, aleaMelangeurTableau};
//module.exports =  {Lmap, iteration, aleaListe, aleaPlancherPlafond, aleaMelangeurTableau};

