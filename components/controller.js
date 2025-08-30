export default class Controller {
    constructor(defaultPoints) {
        this.defaultPoints = defaultPoints
        this.$display = document.getElementById('display')
    }
    main() {
        console.log(this.defaultPoints)
        this.drawStartingPoints()
    }
    drawStartingPoints() {
        this.$display.children[this.defaultPoints[0][1]].children[this.defaultPoints[0][0]].classList.add('starting-point')
        this.$display.children[this.defaultPoints[1][1]].children[this.defaultPoints[1][0]].classList.add('starting-point')
    }
}