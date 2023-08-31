function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().split(' ').join('');
    str2 = str2.toLowerCase().split(' ').join('');
    
    let res = str1.split('').filter(char => {
        if (str2.includes(char)) {
            str2 = str2.replace(char, '');
            return true;
        }
        return false;
    });

    res = res.join('');
    return res === str1;
}

console.log(isAnagram('Astronomer', 'Moon starer'));
console.log(isAnagram('School master', 'The classroom'));
console.log(isAnagram('The Morse Code', 'Here come dots'));