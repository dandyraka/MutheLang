import inquirer from 'inquirer';

const umandanify = (sentence) => {
    let vocal = false;
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
        const letter = sentence[i];
        if (letter === ' ') {
            result += letter + "| ";
            vocal = false;
            continue;
        } else if ("aiueo".includes(letter)) {
            vocal = true;
            result += letter;
        } else if ("bcdfghjklmnpqrstvwxyz".includes(letter)) {
            result += letter;
        } else {
            result += " " + letter + " ";
            vocal = false;
            continue;
        }
        if (vocal) {
            result += " ";
            vocal = false;
            continue;
        }
    }
    const ss = result.replace(/\s+/g, " ");
    result = "";
    for (const s of ss.split(" ")) {
        if (s.length === 3 && s.slice(0, 2) !== "ng") {
            result += s[0] + " " + s.slice(1);
        } else if (s.length === 4 && s.slice(0, 2) === "ng") {
            result += s.slice(0, 2) + " " + s.slice(2);
        } else if (s.length === 4 && s.slice(1, 4) === "nya") {
            result += s[0] + " " + s.slice(1);
        } else if (s.length === 4 && s.slice(1, 4) !== "nya") {
            result += s[0] + " " + s[1] + " " + s.slice(2);
        } else {
            result += s;
        }
        result += " ";
    }
    result = result.replace(/i/g, "ipri")
        .replace(/e/g, "epre")
        .replace(/o/g, "opro")
        .replace(/u/g, "upru")
        .replace(/a/g, "aiden")
        .replace(/ (\w) /g, " $1es ")
        .replace(/^(\w) /g, "$1es ")
        .replace(/ ng /g, " strengen ")
        .replace(/\|/g, "")
        .replace(/\s+/g, " ")
        .replace(/^ | $/g, "")
        .replace(/ ([^\w])/g, "$1");

    return result;
};

const deumandanify = (sentence) => {
    return sentence
        .replace(/(iden|pre|pru|pro|pri)/gi, '')
        .replace(/(strengen)/gi, 'ng')
        .replace(/(.)(es)/gi, '$1');
};

const ngapain = await inquirer
    .prompt([
        {
            type: 'list',
            name: 'what',
            message: 'Mau ngapain?',
            choices: ['Umandanify', 'Deumandanify']
        }
    ])
    .then(({ what }) => what);

const kata = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'kata',
            message: 'Kata yang ingin diubah:'
        }
    ])
    .then(({ kata }) => kata.toLowerCase().trim());

const hasil = (ngapain == "Umandanify") ? umandanify(kata) : deumandanify(kata)
console.log('Hasil:', hasil);