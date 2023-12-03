function ClassField() {
    this.x = 0;
}

ClassField.prototype.main = function () {
    var m = new ClassField();

    m.foo(); // LEFT
    m.base();
    m.bar(); // RIGHT
};

ClassField.prototype.base = function () {
    this.x = 0;
};

ClassField.prototype.foo = function () {
    this.x = 1;
};

ClassField.prototype.bar = function () {
    this.x = 2;
};

var classField = new ClassField();
classField.main();
