import liste from './rx500.js';

const _dataRX = liste => {
    let index = -1;
    const prochainElement = () => {
	index = (index === liste.length - 1) ? 0 : index + 1;
	return liste[index];		 
    };
    return prochainElement;    
};

const dataRX = _dataRX(liste);
export default dataRX;
