
/*
Capitalisation sommaire
  let a = "marie-laure";
  console.log(capitale(a));
  => Marie-Laure
*/
const versMajuscule = chaine => chaine.slice(0,1).toUpperCase() + chaine.slice(1);
const capitale = chaine => chaine.split("-").length > 1 ? chaine.split("-").map(versMajuscule).join("-") : versMajuscule(chaine);

const remplacementEspace = chaine => chaine.replace(/\s/g, "");

//module.exports = {capitale, remplacementEspace};
export {capitale, remplacementEspace};
