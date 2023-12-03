function ClassFieldWithParameter() {
    this.x = 0;
}

ClassFieldWithParameter.prototype.main = function () {
    var m = new ClassFieldWithParameter();
    m.x = 0; // LEFT
    var a = 1;
    m.foo(m.x); // RIGHT
};

ClassFieldWithParameter.prototype.foo = function (a) {
    this.x = a;
};

var classFieldWithParameter = new ClassFieldWithParameter();
classFieldWithParameter.main();
