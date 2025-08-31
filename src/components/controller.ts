export default class Controller {
    private defaultPoints: number[][]
    private dimensions: number[]
    private $display: HTMLElement
    private M: number
    private B: number
    constructor(defaultPoints, dimensions) {
        this.defaultPoints = defaultPoints
        this.dimensions = dimensions
        const displayNullCheck = document.getElementById('display')
        if(displayNullCheck != null) {
            this.$display = displayNullCheck
        }
        this.M
        this.B
    }
    setMandB() {
        this.M = ((this.defaultPoints[0][1] - 0.5) - (this.defaultPoints[1][1] - 0.5)) / ((this.defaultPoints[0][0] - 0.5) - (this.defaultPoints[1][0] - 0.5))
        // y = mx + b
        this.B = this.defaultPoints[0][1] - (this.M * this.defaultPoints[0][0])
    }
    drawStartingPoints() {
        this.$display.children[this.defaultPoints[0][0]].children[this.defaultPoints[0][1]].classList.add('starting-point')
        this.$display.children[this.defaultPoints[1][0]].children[this.defaultPoints[1][1]].classList.add('starting-point')
    }
    findPixels() {
        for(let i = 0; i < this.dimensions[0]; i++) {
            for(let j = 0; j < this.dimensions[1]; j++) {
                let x = i
                let y = j
                this.checkIfPixelContainsPartOfLine(x, y)
            }
        }
    }
    checkIfPixelContainsPartOfLine(x: number, y: number) {
        let val1 = (this.M * x) + this.B
        let val2 = (this.M * (x + 1) + this.B)
        if((val1 <= y) && (val2 >= (y + 1))) {
            console.log('point on line', x, y, this.M, this.B)
            let areaOfGraph = this.$display.children[x].children[y]
            if(!areaOfGraph.classList.contains('starting-point')) {
                areaOfGraph.classList.add('part-of-the-line')
            }
        }
    }
    main() {
        this.drawStartingPoints()
        this.setMandB()
        this.findPixels()
    }
}