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
        this.B = (this.defaultPoints[0][1] - 0.5) + (this.M * (this.defaultPoints[0][0] - 0.5));
    };
    Controller.prototype.drawStartingPoints = function () {
        this.$display.children[this.defaultPoints[0][1] - 1].children[this.defaultPoints[0][0] - 1].classList.add('starting-point');
        this.$display.children[this.defaultPoints[1][1] - 1].children[this.defaultPoints[1][0] - 1].classList.add('starting-point');
    };
    Controller.prototype.main = function () {
        this.drawStartingPoints();
        this.setMandB();
        console.log('hello world!!!', this.dimensions);
    };
    return Controller;
}());
export default Controller;
