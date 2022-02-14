//departementCode,departmentNom,regionCode,regionNom,regionIso
const liste = [
    ["1", {depCode:"01",depNom:"Ain",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["3", {depCode:"03",depNom:"Allier",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["7", {depCode:"07",depNom:"Ardèche",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["15", {depCode:"15",depNom:"Cantal",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["26", {depCode:"26",depNom:"Drôme",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["38", {depCode:"38",depNom:"Isère",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["42", {depCode:"42",depNom:"Loire",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["43", {depCode:"43",depNom:"Haute-Loire",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["63", {depCode:"63",depNom:"Puy-de-Dôme",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["69", {depCode:"69",depNom:"Rhône",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["73", {depCode:"73",depNom:"Savoie",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["74", {depCode:"74",depNom:"Haute-Savoie",regionCode:84,regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara", regionAlphabetique:"1"}],
    ["21", {depCode:"21",depNom:"Côte-d’or",regionCode:27,regionNom:"Bourgogne-Franche-Comté",regionIso:"fr-bfc", regionAlphabetique:"2"}],
    ["25", {depCode:"25",depNom:"Doubs",regionCode:27,regionNom:"Bourgogne-Franche-Comté",regionIso:"fr-bfc", regionAlphabetique:"2"}],
    ["39", {depCode:"39",depNom:"Jura",regionCode:27,regionNom:"Bourgogne-Franche-Comté",regionIso:"fr-bfc", regionAlphabetique:"2"}],
    ["58", {depCode:"58",depNom:"Nièvre",regionCode:27,regionNom:"Bourgogne-Franche-Comté",regionIso:"fr-bfc", regionAlphabetique:"2"}],
    ["70", {depCode:"70",depNom:"Haute-Saône",regionCode:27,regionNom:"Bourgogne-Franche-Comté",regionIso:"fr-bfc", regionAlphabetique:"2"}],
    ["71", {depCode:"71",depNom:"Saône-et-Loire",regionCode:27,regionNom:"Bourgogne-Franche-Comté",regionIso:"fr-bfc", regionAlphabetique:"2"}],
    ["89", {depCode:"89",depNom:"Yonne",regionCode:27,regionNom:"Bourgogne-Franche-Comté",regionIso:"fr-bfc", regionAlphabetique:"2"}],
    ["90", {depCode:"90",depNom:"Territoire de Belfort",regionCode:27,regionNom:"Bourgogne-Franche-Comté",regionIso:"fr-bfc", regionAlphabetique:"2"}],
    ["22", {depCode:"22",depNom:"Côtes-d’armor",regionCode:53,regionNom:"Bretagne",regionIso:"fr-bre", regionAlphabetique:"3"}],
    ["29", {depCode:"29",depNom:"Finistère",regionCode:53,regionNom:"Bretagne",regionIso:"fr-bre", regionAlphabetique:"3"}],
    ["35", {depCode:"35",depNom:"Ille-et-Vilaine",regionCode:53,regionNom:"Bretagne",regionIso:"fr-bre", regionAlphabetique:"3"}],
    ["56", {depCode:"56",depNom:"Morbihan",regionCode:53,regionNom:"Bretagne",regionIso:"fr-bre", regionAlphabetique:"3"}],
    
    ["2A", {depCode:"2A",depNom:"Corse-du-Sud",regionCode:94,regionNom:"Corse",regionIso:"fr-cor", regionAlphabetique:"5"}],
    ["2B", {depCode:"2B",depNom:"Haute-Corse",regionCode:94,regionNom:"Corse",regionIso:"fr-cor", regionAlphabetique:"5"}],
    ["2a", {depCode:"2a",depNom:"Corse-du-Sud",regionCode:94,regionNom:"Corse",regionIso:"fr-cor", regionAlphabetique:"5"}],
    ["2b", {depCode:"2b",depNom:"Haute-Corse",regionCode:94,regionNom:"Corse",regionIso:"fr-cor", regionAlphabetique:"5"}],

    ["18", {depCode:"18",depNom:"Cher",regionCode:24,regionNom:"Centre-Val de Loire",regionIso:"fr-cvl", regionAlphabetique:"4"}],
    ["28", {depCode:"28",depNom:"Eure-et-Loir",regionCode:24,regionNom:"Centre-Val de Loire",regionIso:"fr-cvl", regionAlphabetique:"4"}],
    ["36", {depCode:"36",depNom:"Indre",regionCode:24,regionNom:"Centre-Val de Loire",regionIso:"fr-cvl", regionAlphabetique:"4"}],
    ["37", {depCode:"37",depNom:"Indre-et-Loire",regionCode:24,regionNom:"Centre-Val de Loire",regionIso:"fr-cvl", regionAlphabetique:"4"}],
    ["41", {depCode:"41",depNom:"Loir-et-Cher",regionCode:24,regionNom:"Centre-Val de Loire",regionIso:"fr-cvl", regionAlphabetique:"4"}],
    ["45", {depCode:"45",depNom:"Loiret",regionCode:24,regionNom:"Centre-Val de Loire",regionIso:"fr-cvl", regionAlphabetique:"4"}],
    ["8", {depCode:"08",depNom:"Ardennes",regionCode:44,regionNom:"Grand-Est",regionIso:"fr-ges", regionAlphabetique:"6"}],
    ["10", {depCode:"10",depNom:"Aube",regionCode:44,regionNom:"Grand-Est",regionIso:"fr-ges", regionAlphabetique:"6"}],
    ["51", {depCode:"51",depNom:"Marne",regionCode:44,regionNom:"Grand-Est",regionIso:"fr-ges", regionAlphabetique:"6"}],
    ["52", {depCode:"52",depNom:"Haute-Marne",regionCode:44,regionNom:"Grand-Est",regionIso:"fr-ges", regionAlphabetique:"6"}],
    ["54", {depCode:"54",depNom:"Meurthe-et-Moselle",regionCode:44,regionNom:"Grand-Est",regionIso:"fr-ges", regionAlphabetique:"6"}],
    ["55", {depCode:"55",depNom:"Meuse",regionCode:44,regionNom:"Grand-Est",regionIso:"fr-ges", regionAlphabetique:"6"}],
    ["57", {depCode:"57",depNom:"Moselle",regionCode:44,regionNom:"Grand-Est",regionIso:"fr-ges", regionAlphabetique:"6"}],
    ["67", {depCode:"67",depNom:"Bas-Rhin",regionCode:44,regionNom:"Grand-Est",regionIso:"fr-ges", regionAlphabetique:"6"}],
    ["68", {depCode:"68",depNom:"Haut-Rhin",regionCode:44,regionNom:"Grand-Est",regionIso:"fr-ges", regionAlphabetique:"6"}],
    ["88", {depCode:"88",depNom:"Vosges",regionCode:44,regionNom:"Grand-Est",regionIso:"fr-ges", regionAlphabetique:"6"}],
    ["973", {depCode:"973",depNom:"Guyane",regionCode:3,regionNom:"Guyane",regionIso:"fr-guf", regionAlphabetique:"8"}],
    ["971", {depCode:"971",depNom:"Guadeloupe",regionCode:1,regionNom:"Guadeloupe",regionIso:"fr-gua", regionAlphabetique:"7"}],
    ["2", {depCode:"02",depNom:"Aisne",regionCode:32,regionNom:"Hauts-de-France",regionIso:"fr-hdf", regionAlphabetique:"9"}],
    ["59", {depCode:"59",depNom:"Nord",regionCode:32,regionNom:"Hauts-de-France",regionIso:"fr-hdf", regionAlphabetique:"9"}],
    ["60", {depCode:"60",depNom:"Oise",regionCode:32,regionNom:"Hauts-de-France",regionIso:"fr-hdf", regionAlphabetique:"9"}],
    ["62", {depCode:"62",depNom:"Pas-de-Calais",regionCode:32,regionNom:"Hauts-de-France",regionIso:"fr-hdf", regionAlphabetique:"9"}],
    ["80", {depCode:"80",depNom:"Somme",regionCode:32,regionNom:"Hauts-de-France",regionIso:"fr-hdf", regionAlphabetique:"9"}],
    ["75", {depCode:"75",depNom:"Paris",regionCode:11,regionNom:"Île-de-France",regionIso:"fr-idf", regionAlphabetique:"10"}],
    ["77", {depCode:"77",depNom:"Seine-et-Marne",regionCode:11,regionNom:"Île-de-France",regionIso:"fr-idf", regionAlphabetique:"10"}],
    ["78", {depCode:"78",depNom:"Yvelines",regionCode:11,regionNom:"Île-de-France",regionIso:"fr-idf", regionAlphabetique:"10"}],
    ["91", {depCode:"91",depNom:"Essonne",regionCode:11,regionNom:"Île-de-France",regionIso:"fr-idf", regionAlphabetique:"10"}],
    ["92", {depCode:"92",depNom:"Hauts-de-Seine",regionCode:11,regionNom:"Île-de-France",regionIso:"fr-idf", regionAlphabetique:"10"}],
    ["93", {depCode:"93",depNom:"Seine-Saint-Denis",regionCode:11,regionNom:"Île-de-France",regionIso:"fr-idf", regionAlphabetique:"10"}],
    ["94", {depCode:"94",depNom:"Val-de-Marne",regionCode:11,regionNom:"Île-de-France",regionIso:"fr-idf", regionAlphabetique:"10"}],
    ["95", {depCode:"95",depNom:"Val-d’oise",regionCode:11,regionNom:"Île-de-France",regionIso:"fr-idf", regionAlphabetique:"10"}],
    ["972", {depCode:"972",depNom:"Martinique",regionCode:2,regionNom:"Martinique",regionIso:"fr-mtq", regionAlphabetique:"12"}],
    ["16", {depCode:"16",depNom:"Charente",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["17", {depCode:"17",depNom:"Charente-Maritime",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["19", {depCode:"19",depNom:"Corrèze",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["23", {depCode:"23",depNom:"Creuse",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["24", {depCode:"24",depNom:"Dordogne",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["33", {depCode:"33",depNom:"Gironde",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["40", {depCode:"40",depNom:"Landes",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["47", {depCode:"47",depNom:"Lot-et-Garonne",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["64", {depCode:"64",depNom:"Pyrénées-Atlantiques",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["79", {depCode:"79",depNom:"Deux-Sèvres",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["86", {depCode:"86",depNom:"Vienne",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["87", {depCode:"87",depNom:"Haute-Vienne",regionCode:75,regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq", regionAlphabetique:"15"}],
    ["14", {depCode:"14",depNom:"Calvados",regionCode:28,regionNom:"Normandie",regionIso:"fr-nor", regionAlphabetique:"14"}],
    ["27", {depCode:"27",depNom:"Eure",regionCode:28,regionNom:"Normandie",regionIso:"fr-nor", regionAlphabetique:"14"}],
    ["50", {depCode:"50",depNom:"Manche",regionCode:28,regionNom:"Normandie",regionIso:"fr-nor", regionAlphabetique:"14"}],
    ["61", {depCode:"61",depNom:"Orne",regionCode:28,regionNom:"Normandie",regionIso:"fr-nor", regionAlphabetique:"14"}],
    ["76", {depCode:"76",depNom:"Seine-Maritime",regionCode:28,regionNom:"Normandie",regionIso:"fr-nor", regionAlphabetique:"14"}],
    ["9", {depCode:"09",depNom:"Ariège",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["11", {depCode:"11",depNom:"Aude",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["12", {depCode:"12",depNom:"Aveyron",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["30", {depCode:"30",depNom:"Gard",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["31", {depCode:"31",depNom:"Haute-Garonne",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["32", {depCode:"32",depNom:"Gers",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["34", {depCode:"34",depNom:"Hérault",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["46", {depCode:"46",depNom:"Lot",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["48", {depCode:"48",depNom:"Lozère",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["65", {depCode:"65",depNom:"Hautes-Pyrénées",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["66", {depCode:"66",depNom:"Pyrénées-Orientales",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["81", {depCode:"81",depNom:"Tarn",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["82", {depCode:"82",depNom:"Tarn-et-Garonne",regionCode:76,regionNom:"Occitanie",regionIso:"fr-occ", regionAlphabetique:"16"}],
    ["4", {depCode:"4",depNom:"Alpes-de-Haute-Provence",regionCode:93,regionNom:"Provence-Alpes-Côte d’Azur",regionIso:"fr-pac", regionAlphabetique:"18"}],
    ["5", {depCode:"5",depNom:"Hautes-Alpes",regionCode:93,regionNom:"Provence-Alpes-Côte d’Azur",regionIso:"fr-pac", regionAlphabetique:"18"}],
    ["6", {depCode:"6",depNom:"Alpes-Maritimes",regionCode:93,regionNom:"Provence-Alpes-Côte d’Azur",regionIso:"fr-pac", regionAlphabetique:"18"}],
    ["13", {depCode:"13",depNom:"Bouches-du-Rhône",regionCode:93,regionNom:"Provence-Alpes-Côte d’Azur",regionIso:"fr-pac", regionAlphabetique:"18"}],
    ["83", {depCode:"83",depNom:"Var",regionCode:93,regionNom:"Provence-Alpes-Côte d’Azur",regionIso:"fr-pac", regionAlphabetique:"18"}],
    ["84", {depCode:"84",depNom:"Vaucluse",regionCode:93,regionNom:"Provence-Alpes-Côte d’Azur",regionIso:"fr-pac", regionAlphabetique:"18"}],
    ["44", {depCode:"44",depNom:"Loire-Atlantique",regionCode:52,regionNom:"Pays de la Loire",regionIso:"fr-pdl", regionAlphabetique:"17"}],
    ["49", {depCode:"49",depNom:"Maine-et-Loire",regionCode:52,regionNom:"Pays de la Loire",regionIso:"fr-pdl", regionAlphabetique:"17"}],
    ["53", {depCode:"53",depNom:"Mayenne",regionCode:52,regionNom:"Pays de la Loire",regionIso:"fr-pdl", regionAlphabetique:"17"}],
    ["72", {depCode:"72",depNom:"Sarthe",regionCode:52,regionNom:"Pays de la Loire",regionIso:"fr-pdl", regionAlphabetique:"17"}],
    ["85", {depCode:"85",depNom:"Vendée",regionCode:52,regionNom:"Pays de la Loire",regionIso:"fr-pdl", regionAlphabetique:"17"}],
    ["974", {depCode:"974",depNom:"La Réunion",regionCode:4,regionNom:"La Réunion",regionIso:"fr-lre", regionAlphabetique:"11"}],
    ["976", {depCode:"976",depNom:"Mayotte",regionCode:6,regionNom:"Mayotte",regionIso:"fr-may", regionAlphabetique:"13"}],
];

const listeRegions = [
    {regionNom:"Auvergne-Rhône-Alpes",regionIso:"fr-ara"},
    {regionNom:"Bourgogne-Franche-Comté",regionIso:"fr-bfc"},
    {regionNom:"Bretagne",regionIso:"fr-bre"},
    {regionNom:"Corse",regionIso:"fr-cor"},
    {regionNom:"Centre-Val de Loire",regionIso:"fr-cvl"},
    {regionNom:"Grand-Est",regionIso:"fr-ges"},
    {regionNom:"Guyane",regionIso:"fr-guf"},
    {regionNom:"Guadeloupe",regionIso:"fr-gua"},
    {regionNom:"Hauts-de-France",regionIso:"fr-hdf"},
    {regionNom:"Île-de-France",regionIso:"fr-idf"},
    {regionNom:"Martinique",regionIso:"fr-mtq"},
    {regionNom:"Nouvelle-Aquitaine",regionIso:"fr-naq"},
    {regionNom:"Normandie",regionIso:"fr-nor"},
    {regionNom:"Occitanie",regionIso:"fr-occ"},
    {regionNom:"Provence-Alpes-Côte d’Azur"},
    {regionNom:"Pays de la Loire",regionIso:"fr-pdl"},
    {regionNom:"La Réunion",regionIso:"fr-lre"},
    {regionNom:"Mayotte",regionIso:"fr-may"}
];


const listeDepartements = [
    {depCode:"01",depNom:"Ain"},
    {depCode:"03",depNom:"Allier"},
    {depCode:"07",depNom:"Ardèche"},
    {depCode:"15",depNom:"Cantal"},
    {depCode:"26",depNom:"Drôme"},
    {depCode:"38",depNom:"Isère"},
    {depCode:"42",depNom:"Loire"},
    {depCode:"43",depNom:"Haute-Loire"},
    {depCode:"63",depNom:"Puy-de-Dôme"},
    {depCode:"69",depNom:"Rhône"},
    {depCode:"73",depNom:"Savoie"},
    {depCode:"74",depNom:"Haute-Savoie"},
    {depCode:"21",depNom:"Côte-d’or"},
    {depCode:"25",depNom:"Doubs"},
    {depCode:"39",depNom:"Jura"},
    {depCode:"58",depNom:"Nièvre"},
    {depCode:"70",depNom:"Haute-Saône"},
    {depCode:"71",depNom:"Saône-et-Loire"},
    {depCode:"89",depNom:"Yonne"},
    {depCode:"90",depNom:"Territoire de Belfort"},
    {depCode:"22",depNom:"Côtes-d’armor"},
    {depCode:"29",depNom:"Finistère"},
    {depCode:"35",depNom:"Ille-et-Vilaine"},
    {depCode:"56",depNom:"Morbihan"},
    {depCode:"2A",depNom:"Corse-du-Sud"},
    {depCode:"2B",depNom:"Haute-Corse"},
    {depCode:"18",depNom:"Cher"},
    {depCode:"28",depNom:"Eure-et-Loir"},
    {depCode:"36",depNom:"Indre"},
    {depCode:"37",depNom:"Indre-et-Loire"},
    {depCode:"41",depNom:"Loir-et-Cher"},
    {depCode:"45",depNom:"Loiret"},
    {depCode:"08",depNom:"Ardennes"},
    {depCode:"10",depNom:"Aube"},
    {depCode:"51",depNom:"Marne"},
    {depCode:"52",depNom:"Haute-Marne"},
    {depCode:"54",depNom:"Meurthe-et-Moselle"},
    {depCode:"55",depNom:"Meuse"},
    {depCode:"57",depNom:"Moselle"},
    {depCode:"67",depNom:"Bas-Rhin"},
    {depCode:"68",depNom:"Haut-Rhin"},
    {depCode:"88",depNom:"Vosges"},
    {depCode:"973",depNom:"Guyane"},
    {depCode:"971",depNom:"Guadeloupe"},
    {depCode:"02",depNom:"Aisne"},
    {depCode:"59",depNom:"Nord"},
    {depCode:"60",depNom:"Oise"},
    {depCode:"62",depNom:"Pas-de-Calais"},
    {depCode:"80",depNom:"Somme"},
    {depCode:"75",depNom:"Paris"},
    {depCode:"77",depNom:"Seine-et-Marne"},
    {depCode:"78",depNom:"Yvelines"},
    {depCode:"91",depNom:"Essonne"},
    {depCode:"92",depNom:"Hauts-de-Seine"},
    {depCode:"93",depNom:"Seine-Saint-Denis"},
    {depCode:"94",depNom:"Val-de-Marne"},
    {depCode:"95",depNom:"Val-d’oise"},
    {depCode:"972",depNom:"Martinique"},
    {depCode:"16",depNom:"Charente"},
    {depCode:"17",depNom:"Charente-Maritime"},
    {depCode:"19",depNom:"Corrèze"},
    {depCode:"23",depNom:"Creuse"},
    {depCode:"24",depNom:"Dordogne"},
    {depCode:"33",depNom:"Gironde"},
    {depCode:"40",depNom:"Landes"},
    {depCode:"47",depNom:"Lot-et-Garonne"},
    {depCode:"64",depNom:"Pyrénées-Atlantiques"},
    {depCode:"79",depNom:"Deux-Sèvres"},
    {depCode:"86",depNom:"Vienne"},
    {depCode:"87",depNom:"Haute-Vienne"},
    {depCode:"14",depNom:"Calvados"},
    {depCode:"27",depNom:"Eure"},
    {depCode:"50",depNom:"Manche"},
    {depCode:"61",depNom:"Orne"},
    {depCode:"76",depNom:"Seine-Maritime"},
    {depCode:"09",depNom:"Ariège"},
    {depCode:"11",depNom:"Aude"},
    {depCode:"12",depNom:"Aveyron"},
    {depCode:"30",depNom:"Gard"},
    {depCode:"31",depNom:"Haute-Garonne"},
    {depCode:"32",depNom:"Gers"},
    {depCode:"34",depNom:"Hérault"},
    {depCode:"46",depNom:"Lot"},
    {depCode:"48",depNom:"Lozère"},
    {depCode:"65",depNom:"Hautes-Pyrénées"},
    {depCode:"66",depNom:"Pyrénées-Orientales"},
    {depCode:"81",depNom:"Tarn"},
    {depCode:"82",depNom:"Tarn-et-Garonne"},
    {depCode:"4",depNom:"Alpes-de-Haute-Provence"},
    {depCode:"5",depNom:"Hautes-Alpes"},
    {depCode:"6",depNom:"Alpes-Maritimes"},
    {depCode:"13",depNom:"Bouches-du-Rhône"},
    {depCode:"83",depNom:"Var"},
    {depCode:"84",depNom:"Vaucluse"},
    {depCode:"44",depNom:"Loire-Atlantique"},
    {depCode:"49",depNom:"Maine-et-Loire"},
    {depCode:"53",depNom:"Mayenne"},
    {depCode:"72",depNom:"Sarthe"},
    {depCode:"85",depNom:"Vendée"},
    {depCode:"974",depNom:"La Réunion"},
    {depCode:"976",depNom:"Mayotte"},
];






//export default new Map(liste);
const listeDR = new Map(liste);
export {listeDR, listeDepartements, listeRegions};
