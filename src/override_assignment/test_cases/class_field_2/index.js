function ClassField() {
    this.x = 0;
}

ClassField.prototype.main = function () {
    var m = new ClassField();

    m.foo(); // LEFT
    m.bar(); // RIGHT
};

ClassField.prototype.foo = function () {
    this.x = 0;
};

ClassField.prototype.bar = function () {
    this.x = 1;
};

var classField = new ClassField();
classField.main();
