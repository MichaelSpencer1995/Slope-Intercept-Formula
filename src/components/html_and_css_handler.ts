export default class HtmlAndCssHandler {
    private pageTitle: string
    private dimensions: number[]
    private pixelSize: number
    private minX: number
    private maxX: number
    private minY: number
    private maxY: number
    private minPixel: number
    private maxPixel: number
    private p1X: number
    private p1Y: number
    private p2X: number
    private p2Y: number

    constructor(config) {
        this.pageTitle = "Plot pixels using slope intercept form"
        this.dimensions = config.dimensions
        this.pixelSize = config.pixelSize
        this.minX = 11
        this.maxX = 112
        this.minY = 14
        this.maxY = 152
        this.minPixel = 7
        this.maxPixel = 15
        this.p1X = config.defaultPoints[0][0]
        this.p1Y = config.defaultPoints[0][1]
        this.p2X = config.defaultPoints[1][0]
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
            #display-container {
            }
            #display {
                display: flex;
                justify-content: flex-start;
                border: white 4px solid;
            }
            .starting-point {
                background: #ff0041;
            }
            .part-of-the-line {
                background: #007a2c;
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

        // if(this.invalidDefaultPoints()) {
        //     console.error('Starting points fall outside of the displays boundaries')
        //     return
        // }

        const $root = document.createElement('div')
        $root.setAttribute('id', 'root')
        document.body.appendChild($root)

        const $display = document.createElement('div')
        $display.setAttribute('id', 'display')

        for(let i = 0; i < this.dimensions[0]; i++) {
        let $pixelRowContainer = document.createElement('div')

            for(let j = 0; j < this.dimensions[1]; j++) {
                let $pixel = document.createElement('div')
                $pixel.style.width = this.pixelSize + "px"
                $pixel.style.height = this.pixelSize + "px"
                $pixel.style.border = "#000 1px solid"
                $pixelRowContainer.appendChild($pixel)
            }
            $display.appendChild($pixelRowContainer)
        }

        const $displayContainer = document.createElement('div')
        $displayContainer.appendChild($display)
        $displayContainer.setAttribute('id', 'display-container')
        $root.appendChild($displayContainer)
    }
    attachPointsInterface() {
        const $displayContainer = document.getElementById('display-container')
        const $container = document.createElement('div')

        const $p1X = document.createElement('div')
        $p1X.innerHTML = this.p1X.toString()
        const $p1Y = document.createElement('div')
        $p1Y.innerHTML = this.p1Y.toString()

        $container.appendChild($p1X)
        $container.appendChild($p1Y)

        if($displayContainer != null) {
            $displayContainer.appendChild($container)
        }
    }
    main() {
        this.setTitle()
        this.attachCSS()
        this.attachDisplay()
        this.attachPointsInterface()
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
    // invalidDefaultPoints() {

    // }
}