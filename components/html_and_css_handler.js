export default class HtmlAndCssHandler {
    constructor(dimensions, pixelSize) {
        this.dimensions = dimensions
        this.pixelSize = pixelSize
        this.minX = 11
        this.maxX = 112
        this.minY = 14
        this.maxY = 152
        this.minPixel = 2
        this.maxPixel = 8
    }
    setTitle() {
        document.title = "Slope Intercept Formula"
    }
    attachCSS() {
        const style = document.createElement("style")
        style.innerHTML = `
            body {
                background: #0f0f0f;
            }
            #game-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                margin-top: 120px;
                /* position: relative; */
            }
            #start-button {
                /* position: absolute;
                top: 50%;
                left: 50%; */
            }
            #moniter {
                display: flex;
                border: white 4px solid;
            }
            #score {
                color: #fff;
                font-size: 25px;
            }
        `
        document.head.appendChild(style)
    }
    invalidDimensions() {
        if(this.dimensions[0] < this.minX || this.dimensions[0] > this.maxX) {
            return true
        }
        if(this.dimensions[1] < this.minY || this.dimensions[1] > this.maxY) {
            return true
        }
    }
    invalidPixelSize() {
        if(this.pixelSize < this.minPixel || this.pixelSize > this.maxPixel) {
            return true
        }
    }
    attachDisplay() {
        if(this.invalidDimensions()) {
            console.error(`Invalid dimensions, dimension 1 must be between ${ this.minX } and ${ this.maxX } and dimension 2 must be between ${ this.minY } and ${ this.maxY }`)
            return
        }
        if(this.invalidPixelSize()) {
            console.error(`Invalid pixel size, pixel size must be between ${ this.minPixel } and ${ this.maxPixel }`)
            return
        }
    }
    main() {
        this.setTitle()
        this.attachCSS()
        this.attachDisplay()
        let matrix = this.attachDisplay()
        return matrix
    }
}