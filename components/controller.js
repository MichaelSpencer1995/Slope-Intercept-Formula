export default class Controller {
    constructor(defaultPoints, dimensions) {
        this.defaultPoints = defaultPoints
        this.dimensions = dimensions
        this.$display = document.getElementById('display')
        this.M
        this.B
    }
    setMandB() {
        this.M = ((this.defaultPoints[0][1] - 0.5) - (this.defaultPoints[1][1] - 0.5)) / ((this.defaultPoints[0][0] - 0.5) - (this.defaultPoints[1][0] - 0.5))
        this.B = (this.defaultPoints[0][1] - 0.5) + (this.M * (this.defaultPoints[0][0] - 0.5))
    }
    drawStartingPoints() {
        this.$display.children[this.defaultPoints[0][1]-1].children[this.defaultPoints[0][0]-1].classList.add('starting-point')
        this.$display.children[this.defaultPoints[1][1]-1].children[this.defaultPoints[1][0]-1].classList.add('starting-point')
    }
    main() {
        this.drawStartingPoints()
        this.setMandB()
        console.log('hello world!!!', this.dimensions)
    }
}