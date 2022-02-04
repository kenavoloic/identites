const choix1 = document.getElementById('demo1');
const d1t1 = document.getElementById('d1t1');
const d1t2 = document.getElementById('d1t2');


const choix2 = document.getElementById('demo2');
const d2t1 = document.getElementById('d2t1');
const d2t2 = document.getElementById('d2t2');

const liste1 = new Map([
    [0, {val1:'France', val2:'France'}],
    [1, {val1:'fr-naq:fr-occ:fr-cor', val2:'Nouvelle-Aquitaine, Occitanie et Corse'}],
    [2, {val1:'13:75:79', val2:'Bouches-du-Rhône, Paris, Deux-Sèvres'}],
    [3, {val1:'33063:31555:06088:59350', val2:'Bordeaux, Toulouse, Nice, Lille'}]
]);


const liste2 = new Map([
    [0, {val1:'France', val2:'France'}],
    [1, {val1:'fr-cor', val2:'Corse'}],
    [2, {val1:'79', val2:'Deux-Sèvres'}],
    [3, {val1:'33063', val2:'Bordeaux'}]
]);

const detonateur = (element) => {
    let changement = new Event('change');
    element.dispatchEvent(changement);
};

choix1.addEventListener('change', (e) => {
    let valeur = e.target.options.selectedIndex;
    const {val1, val2} = liste1.get(valeur);
    d1t1.value = val1;
    d1t2.value = val2;
});

choix2.addEventListener('change', (e) => {
    let valeur = e.target.options.selectedIndex;
    const {val1, val2} = liste2.get(valeur);
    d2t1.value = val1;
    d2t2.value = val2;
});


detonateur(choix1);
detonateur(choix2);
