import Controller from "./components/controller.js"
import HtmlAndCssHandler from "./components/html_and_css_handler.js"

export default class App {
    constructor(config) {
        this.config = config
    }
    start() {
        new HtmlAndCssHandler(this.config).main()
        new Controller(this.config.defaultPoints, this.config.dimensions).main()
    }
}