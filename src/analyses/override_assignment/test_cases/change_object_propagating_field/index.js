function Point() {
    this.x = 0;
    this.y = 0;
}

function ChangeObjectPropagationsFieldSample() {}

ChangeObjectPropagationsFieldSample.prototype.main = function () {
    var c = new Point();
    var d = new Point();
    c = d; // LEFT
    var base = 0;
    c.y = 5; // RIGHT
};

var changeObjectPropagationsFieldSample = new ChangeObjectPropagationsFieldSample();
changeObjectPropagationsFieldSample.main();
