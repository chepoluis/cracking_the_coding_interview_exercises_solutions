function isUnique(str) {
    let hashTable = {};
    
    for (let i = 0; i < str.length; i++) {
        const letter = str[i];
        
        if(letter in hashTable) {
            return false;
        } else {
            hashTable[letter] = 1;
        }
    }

    return true;
}

if (isUnique('abcefi')) {
    console.log('Is unique');
} else {
    console.log('Is not unique');
}