function LocalVariables() {}

LocalVariables.prototype.main = function () {
    var m = new LocalVariables();

    m.foo(); // LEFT
    m.bar(); // RIGHT
};

LocalVariables.prototype.foo = function () {
    var x = 0;
};

LocalVariables.prototype.bar = function () {
    var x = 1;
};

var localVariables = new LocalVariables();
localVariables.main();
