import inquirer from 'inquirer';

let ngapain = await inquirer
    .prompt([{
        type: 'list',
        name: 'what',
        message: 'Mau ngapain?',
        choices: ['MutheIn', 'unMuthe']
    }, ])
    .then(answers => {
        return answers.what;
    });

let kata = await inquirer
    .prompt([{
        type: 'input',
        name: 'kata',
        message: 'Apa?',
    }, ])
    .then(answers => {
        return answers.kata;
    });


function toMutheLang(word){
    let kata = word;
    const allWords = kata.match(/\w/gi);
    allWords.forEach((kt, i) => {
        if(kt === "a") allWords[i] = "aiden";
        if(kt === "i") allWords[i] = "ipri";
        if(kt === "u") allWords[i] = "upru";
        if(kt === "e") allWords[i] = "epre";
        if(kt === "o") allWords[i] = "opro";
    });
    return allWords;
}

//aiden depre gaiden maiden upru maiden kaiden naiden nes saiden tepre
//let unMutheLang = kata.replace(/(iden|pre|pru|pro|pri)/gim, '').replace(/((\w)es)/gim, '');

let hasil = "";
if(ngapain == "MutheIn"){
    hasil = toMutheLang(kata)
} else if(ngapain == "unMuthe"){
    hasil = kata.replace(/(iden|pre|pru|pro|pri)/gim, '').replace(/((\w)es)/gim, '');
}
console.log(hasil);