export default class Unit {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.colorArray = this.color.split("");
    }

    get coords() {
        return [this.x, this.y]
    }

    /***
     * @param {String} grayscale if true the units color will be a random gray
     */
    randomizeColor(grayscale = false) {
        let hexString = "ABCDEF1234567890";
        //let hexString = "ABCDEF1234567890----------------"; //feature epica
        if (grayscale) {
            let randomHex = hexString.charAt(Math.floor(Math.random() * hexString.length));
            for (let i = 1; i < this.colorArray.length; i++) {
                this.colorArray[i] = randomHex;
            }
        }
        else {
            for (let i = 1; i < this.colorArray.length; i++) {
                this.colorArray[i] = hexString.charAt(Math.floor(Math.random() * hexString.length));
            }
        }
        this.color = this.colorArray.join("")
    }

    fight(u2) {
        if (Math.random < .5) {
            return true; //case win
        } else {
            this.color = u2.color;
            return false;
        }
    }
}