import Controller from "./components/controller.js";
import HtmlAndCssHandler from "./components/html_and_css_handler.js";
var App = /** @class */ (function () {
    function App(config) {
        this.config = config;
    }
    App.prototype.start = function () {
        new HtmlAndCssHandler(this.config).main();
        new Controller(this.config.defaultPoints, this.config.dimensions).main();
    };
    return App;
}());
export default App;
