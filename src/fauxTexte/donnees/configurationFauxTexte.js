//const nombresPremiers = require('./premiers.js');
import {nombresPremiers} from '../outils/premiers.js';

const taillesPhrase = [8, 9, 10, 11, 12, 12, 12, 12, 14, 15, 16, 16, 16, 16, 18, 19, 20, 20, 20, 22, 23, 23, 24, 24, 24, 25, 25, 25, 26, 27, 27, 29, 30, 31, 32, 34, 35, 35, 36, 38, 41, 42, 48];

const insecable = String.fromCharCode(0x202f);
//const espaceFineInsecable = String.fromCharCode(0x202f);
const troisPoints = String.fromCharCode(0x2026);
const point = '.';
const exclamation = insecable + '!';
const interrogation = insecable + '?';

const virgule = ",";
const pointVirgule = insecable + ";";
const deuxPoints = insecable + ":";
const ponctuationsFortes = [
    point, point, point, point, point, point, 
    point, point, point, point, point, point, 
    interrogation, interrogation, interrogation,  interrogation,  interrogation, 
    exclamation, exclamation,  exclamation, 
    troisPoints, troisPoints
];

const virgules = [
    virgule, virgule, virgule,  virgule, virgule, virgule, virgule, virgule, virgule, virgule, 
    virgule, virgule, virgule, virgule, virgule, virgule, 
    pointVirgule, pointVirgule,
    deuxPoints, deuxPoints
];
// modèles
// x = [random.random() for x in range(10]);
// r = [3.55 + random.random()*.1 for x in range(10)];
const nombrePremier = 20717;//17431;//17713;//17707;
//module.exports = { taillesPhrase, ponctuationsFortes, virgules, nombresPremiers};
export { taillesPhrase, ponctuationsFortes, virgules, nombresPremiers};
