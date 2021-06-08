let word1 = 'luisasdasd';
let word2 = 'sasluidasd';

const wordOrder1 = word1.split('').sort(function (a, b) {
    return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
})

const wordOrder2 = word2.split('').sort(function (a, b) {
    return a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase());
})

console.log(wordOrder1);
console.log(wordOrder2);

if (wordOrder1.join('') === wordOrder2.join('')) {
    console.log('Is permutation');
} else {
    console.log('Not is permutation');
}