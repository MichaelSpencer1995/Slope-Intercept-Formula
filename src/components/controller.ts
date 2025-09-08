export default class Controller {
    private defaultPoints: number[][]
    private dimensions: number[]
    private $display: HTMLElement
    private M: number
    private B: number
    private horizontalIntersections: number[]
    private verticalIntersections: number[]
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
    // setMandB() {
    //     this.M = ((this.defaultPoints[0][1] + 0.5) - (this.defaultPoints[1][1] + 0.5)) / ((this.defaultPoints[0][0] + 0.5) - (this.defaultPoints[1][0] + 0.5))
    //     // y = mx + b
    //     this.B = this.defaultPoints[0][1] - (this.M * this.defaultPoints[0][0])
    // }
    drawStartingPoints() {
        this.$display.children[this.defaultPoints[0][0] + 0.5].children[this.defaultPoints[0][1] + 0.5].classList.add('starting-point')
        this.$display.children[this.defaultPoints[1][0] + 0.5].children[this.defaultPoints[1][1] + 0.5].classList.add('starting-point')
    }
    setHorizontalIntersections() {
        const range = this.defaultPoints[1][0] - this.defaultPoints[0][0]
        console.log(range)
        let startingX = this.defaultPoints[0][0] + 0.5
        let array = []
        for(let i = 0; i < range; i++) {
            array.push(startingX + i)
        }
        return array
    }
    setVerticalIntersections() {
        return []
    }
    // findPixels() {
    //     for(let i = 0; i < this.dimensions[0]; i++) {
    //         for(let j = 0; j < this.dimensions[1]; j++) {
    //             let x = i
    //             let y = j
    //             this.checkIfPixelContainsPartOfLine(x, y)
    //         }
    //     }
    // }
    // checkIfPixelContainsPartOfLine(x: number, y: number) {
    //     let val1 = (this.M * x) + this.B
    //     let val2 = (this.M * (x + 1) + this.B)
    //     if((val1 <= y) && (val2 >= (y + 1))) {
    //         let areaOfGraph = this.$display.children[x].children[y]
    //         if(!areaOfGraph.classList.contains('starting-point')) {
    //             areaOfGraph.classList.add('part-of-the-line')
    //             console.log(`
    //                 x: ${ x }
    //                 y: ${ y }
    //                 slope: ${ this.M }
    //                 Y-intercept: ${ this.B }
    //             `)
    //         }
    //     }
    //     console.log(`
    //         x: ${ x }
    //         y: ${ y }
    //         slope: ${ this.M }
    //         Y-intercept: ${ this.B }
    //     `)
    // }

    main() {
        this.drawStartingPoints()
        this.verticalIntersections = this.setVerticalIntersections()
        this.horizontalIntersections = this.setHorizontalIntersections()
        console.log(this.horizontalIntersections)
        console.log(this.defaultPoints[0])
        console.log(this.defaultPoints[1])
        // this.setMandB()
        // this.findPixels()
    }
}