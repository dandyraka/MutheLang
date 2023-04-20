import inquirer from 'inquirer';

const toMutheLang = (sentence) => {
    const translatedWords = sentence
        .split(' ')
        .map((word) => {
            let translatedWord = '';
            for (const letter of word) {
                const vowelMapping = {
                    'a': 'aiden ',
                    'e': 'epre ',
                    'i': 'ipri ',
                    'o': 'opro ',
                    'u': 'upru '
                };
                translatedWord += vowelMapping[letter.toLowerCase()] || letter;
            }
            translatedWord = translatedWord.replace(/\b([b-df-hj-np-tv-z])(?!\w)/gi, '$1es');
            return translatedWord;
        });

    return translatedWords.join(' ').trim().replace(/\s{2,}/g, ' ');
};

const unMuthe = (sentence) => {
    return sentence
        .replace(/(iden|pre|pru|pro|pri)/gi, '')
        .replace(/(.)(es)/gi, '$1');
};

const ngapain = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'what',
            message: 'Mau ngapain?',
            choices: ['MutheIn', 'unMuthe']
        }
    ])
    .then(({ what }) => what);

const kata = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'kata',
            message: 'Apa?'
        }
    ])
    .then(({ kata }) => kata);

const hasil = (ngapain == "MutheIn") ? toMutheLang(kata) : unMuthe(kata)
console.log(`Hasil: ${hasil}`);