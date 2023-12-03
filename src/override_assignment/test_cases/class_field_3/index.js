function ClassField() {
    this.x = 0;
}

ClassField.prototype.main = function () {
    var m = new ClassField();

    m.x = 1; // LEFT
    m.base();
    m.foo(); // RIGHT
};

ClassField.prototype.base = function () {
    this.x = 0;
};

ClassField.prototype.foo = function () {
    this.x = 2;
};

var classField = new ClassField();
classField.main();
