import HtmlAndCssHandler from "./components/html_and_css_handler.js"

export default class App {
    constructor(config) {
        this.config = config
        this.matrix
    }
    start() {
        this.matrix = new HtmlAndCssHandler(this.config.dimensions, this.config.pixelSize).main()
    }
}