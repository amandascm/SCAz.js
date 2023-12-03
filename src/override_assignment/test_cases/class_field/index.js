function ClassField() {
    this.x = 0;
}

ClassField.prototype.main = function () {
    var m = new ClassField();

    m.x = 0; // LEFT
    m.foo(); // RIGHT
};

ClassField.prototype.foo = function () {
    this.x = 1;
};

var classField = new ClassField();
classField.main();
