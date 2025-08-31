var Controller = /** @class */ (function () {
    function Controller(defaultPoints, dimensions) {
        this.defaultPoints = defaultPoints;
        this.dimensions = dimensions;
        var displayNullCheck = document.getElementById('display');
        if (displayNullCheck != null) {
            this.$display = displayNullCheck;
        }
        this.M;
        this.B;
    }
    Controller.prototype.setMandB = function () {
        this.M = ((this.defaultPoints[0][1] - 0.5) - (this.defaultPoints[1][1] - 0.5)) / ((this.defaultPoints[0][0] - 0.5) - (this.defaultPoints[1][0] - 0.5));
        // y = mx + b
        this.B = this.defaultPoints[0][1] - (this.M * this.defaultPoints[0][0]);
    };
    Controller.prototype.drawStartingPoints = function () {
        this.$display.children[this.defaultPoints[0][0]].children[this.defaultPoints[0][1]].classList.add('starting-point');
        this.$display.children[this.defaultPoints[1][0]].children[this.defaultPoints[1][1]].classList.add('starting-point');
    };
    Controller.prototype.findPixels = function () {
        for (var i = 0; i < this.dimensions[0]; i++) {
            for (var j = 0; j < this.dimensions[1]; j++) {
                var x = i;
                var y = j;
                this.checkIfPixelContainsPartOfLine(x, y);
            }
        }
    };
    Controller.prototype.checkIfPixelContainsPartOfLine = function (x, y) {
        var val1 = (this.M * x) + this.B;
        var val2 = (this.M * (x + 1) + this.B);
        if ((val1 <= y) && (val2 >= (y + 1))) {
            console.log('point on line', x, y, this.M, this.B);
            var areaOfGraph = this.$display.children[x].children[y];
            if (!areaOfGraph.classList.contains('starting-point')) {
                areaOfGraph.classList.add('part-of-the-line');
            }
        }
    };
    Controller.prototype.main = function () {
        this.drawStartingPoints();
        this.setMandB();
        this.findPixels();
    };
    return Controller;
}());
export default Controller;
