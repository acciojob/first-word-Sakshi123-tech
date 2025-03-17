function firstWord(str) {
    // Trim leading and trailing spaces
    str = str.trim();
    
    // If the string is empty, return an empty string
    if (str === '') {
        return '';
    }
    
    // Find the index of the first space
    const spaceIndex = str.indexOf(' ');

    // If there's no space, return the entire string
    if (spaceIndex === -1) {
        return str;
    }

    // Return the substring from the start of the string up to the first space
    return str.substring(0, spaceIndex);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
