var HtmlAndCssHandler = /** @class */ (function () {
    function HtmlAndCssHandler(config) {
        this.pageTitle = "Plot pixels using slope intercept form";
        this.dimensions = config.dimensions;
        this.pixelSize = config.pixelSize;
        this.minX = 11;
        this.maxX = 112;
        this.minY = 14;
        this.maxY = 152;
        this.minPixel = 7;
        this.maxPixel = 15;
        this.p1X = config.defaultPoints[0][0];
        this.p1Y = config.defaultPoints[0][1];
        this.p2X = config.defaultPoints[1][0];
        this.p2Y = config.defaultPoints[1][1];
    }
    HtmlAndCssHandler.prototype.setTitle = function () {
        document.title = this.pageTitle;
    };
    HtmlAndCssHandler.prototype.attachCSS = function () {
        var style = document.createElement("style");
        style.innerHTML = "\n            body {\n                background: #fff;\n            }\n            #root {\n                display: flex;\n                flex-direction: column;\n                align-items: center;\n            }\n            #display-container {\n            }\n            #display {\n                display: flex;\n                justify-content: flex-start;\n                border: white 4px solid;\n            }\n            .starting-point {\n                background: #ff0041;\n            }\n            .part-of-the-line {\n                background: #007a2c;\n            }\n        ";
        document.head.appendChild(style);
    };
    HtmlAndCssHandler.prototype.attachDisplay = function () {
        if (this.invalidDimensions()) {
            console.error("Invalid dimensions, dimension 1 must be between ".concat(this.minX, " and ").concat(this.maxX, " and dimension 2 must be between ").concat(this.minY, " and ").concat(this.maxY));
            return;
        }
        if (this.invalidPixelSize()) {
            console.error("Invalid pixel size, pixel size must be between ".concat(this.minPixel, " and ").concat(this.maxPixel));
            return;
        }
        // if(this.invalidDefaultPoints()) {
        //     console.error('Starting points fall outside of the displays boundaries')
        //     return
        // }
        var $root = document.createElement('div');
        $root.setAttribute('id', 'root');
        document.body.appendChild($root);
        var $display = document.createElement('div');
        $display.setAttribute('id', 'display');
        for (var i = 0; i < this.dimensions[0]; i++) {
            var $pixelRowContainer = document.createElement('div');
            for (var j = 0; j < this.dimensions[1]; j++) {
                var $pixel = document.createElement('div');
                $pixel.style.width = this.pixelSize + "px";
                $pixel.style.height = this.pixelSize + "px";
                $pixel.style.border = "#000 1px solid";
                $pixelRowContainer.appendChild($pixel);
            }
            $display.appendChild($pixelRowContainer);
        }
        var $displayContainer = document.createElement('div');
        $displayContainer.appendChild($display);
        $displayContainer.setAttribute('id', 'display-container');
        $root.appendChild($displayContainer);
    };
    HtmlAndCssHandler.prototype.attachPointsInterface = function () {
        var $displayContainer = document.getElementById('display-container');
        var $container = document.createElement('div');
        var $p1X = document.createElement('div');
        $p1X.innerHTML = this.p1X.toString();
        var $p1Y = document.createElement('div');
        $p1Y.innerHTML = this.p1Y.toString();
        $container.appendChild($p1X);
        $container.appendChild($p1Y);
        if ($displayContainer != null) {
            $displayContainer.appendChild($container);
        }
    };
    HtmlAndCssHandler.prototype.main = function () {
        this.setTitle();
        this.attachCSS();
        this.attachDisplay();
        this.attachPointsInterface();
    };
    HtmlAndCssHandler.prototype.invalidDimensions = function () {
        if (this.dimensions[0] < this.minX || this.dimensions[0] > this.maxX) {
            return true;
        }
        if (this.dimensions[1] < this.minY || this.dimensions[1] > this.maxY) {
            return true;
        }
    };
    HtmlAndCssHandler.prototype.invalidPixelSize = function () {
        if (this.pixelSize < this.minPixel || this.pixelSize > this.maxPixel) {
            return true;
        }
    };
    return HtmlAndCssHandler;
}());
export default HtmlAndCssHandler;
