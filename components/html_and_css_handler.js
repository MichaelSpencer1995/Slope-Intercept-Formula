export default class HtmlAndCssHandler {
    constructor(dimensions, pixelSize) {
        this.pageTitle = "Slope Intercept Formula"
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
        document.title = this.pageTitle
    }
    attachCSS() {
        const style = document.createElement("style")
        style.innerHTML = `
            body {
                background: #0f0f0f;
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
                $pixel.style.border = "white 1px solid"
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
    main() {
        this.setTitle()
        this.attachCSS()
        return this.attachDisplay()
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
}