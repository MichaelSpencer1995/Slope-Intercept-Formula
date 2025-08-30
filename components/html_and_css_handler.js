export default class HtmlAndCssHandler {
    constructor(config) {
        this.pageTitle = "Slope Intercept Formula"
        this.dimensions = config.dimensions
        this.pixelSize = config.pixelSize
        this.minX = 11
        this.maxX = 112
        this.minY = 14
        this.maxY = 152
        this.minPixel = 7
        this.maxPixel = 15
        this.p1x = config.defaultPoints[0][0]
        this.p1Y = config.defaultPoints[0][1]
        this.p2x = config.defaultPoints[1][0]
        this.p2Y = config.defaultPoints[1][1]
    }
    setTitle() {
        document.title = this.pageTitle
    }
    attachCSS() {
        const style = document.createElement("style")
        style.innerHTML = `
            body {
                background: #fff;
            }
            #root {
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            #display {
                display: flex;
                border: white 4px solid;
            }
        `
        document.head.appendChild(style)
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

        if(this.invalidDefaultPoints()) {
            console.error('Starting points fall outside of the displays boundaries')
            return
        }

        const $root = document.createElement('div')
        $root.setAttribute('id', 'root')
        document.body.appendChild($root)

        const $display = document.createElement('div')
        $display.setAttribute('id', 'display')

        let matrix = []
        for(let i = 0; i < this.dimensions[0]; i++) {
        let $pixelRowContainer = document.createElement('div')
        matrix.push([])
            for(let j = 0; j < this.dimensions[1]; j++) {
                let $pixel = document.createElement('div')
                $pixel.style.width = this.pixelSize + "px"
                $pixel.style.height = this.pixelSize + "px"
                $pixel.style.border = "#000 1px solid"
                $pixelRowContainer.appendChild($pixel)

                matrix[i].push({
                    color: null
                })
            }
            $display.appendChild($pixelRowContainer)
        }

        $root.appendChild($display)
        return matrix

    }
    attachPointsInterface() {
        const $root = document.getElementById('root')
        const $container = document.createElement('div')

        const $p1x = document.createElement('div')
        $p1x.innerHTML = this.p1x

        $container.appendChild($p1x)
        $root.appendChild($container)
    }
    main() {
        this.setTitle()
        this.attachCSS()
        const matrix = this.attachDisplay()
        this.attachPointsInterface()
        return matrix
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
    invalidDefaultPoints() {

    }
}