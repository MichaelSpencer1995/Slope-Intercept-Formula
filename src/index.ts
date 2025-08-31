import Controller from "./components/controller.js"
import HtmlAndCssHandler from "./components/html_and_css_handler.js"
import ConfigInterface from './config/config.js'

export default class App {
    private config: ConfigInterface
    constructor(config: ConfigInterface) {
        this.config = config
    }
    start() {
        new HtmlAndCssHandler(this.config).main()
        new Controller(this.config.defaultPoints, this.config.dimensions).main()
    }
}