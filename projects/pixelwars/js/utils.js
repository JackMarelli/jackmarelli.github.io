export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};

export function getRandomHexColor(grayscale = false) {
    let hexString = "ABCDEF1234567890";
    let result = "#"
    //let hexString = "ABCDEF1234567890----------------"; //feature epica
    if (grayscale) {
        let randomHex = hexString.charAt(Math.floor(Math.random() * hexString.length));
        for (let i = 1; i < 7; i++) {
            result += randomHex;
        }
    }
    else {
        for (let i = 1; i < 7; i++) {
            result += hexString.charAt(Math.floor(Math.random() * hexString.length));
        }
    }
    return result;
}