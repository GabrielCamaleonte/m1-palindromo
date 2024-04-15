function isPalindrome(frase) {
    frase = frase.toLowerCase().replaceAll(" ", "");
    let fraseInvertida = "";
    for (let i = frase.length - 1; i >= 0; i--) {
        fraseInvertida += frase[i];
    }
    if (fraseInvertida == frase) {
        return true
    }
    return false
}

function arrayMaxMin(array) {
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }

        if (array[i] < min) {
            min = array[i];
        }
    }
    return [min,max];
}
