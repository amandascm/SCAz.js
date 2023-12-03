function LocalVariables() {}

LocalVariables.prototype.main = function () {
    var m = new LocalVariables();

    var x = 0;  // LEFT
    m.foo(x);   // RIGHT
};

LocalVariables.prototype.foo = function (a) {
    a = 3;
};

var localVariables = new LocalVariables();
localVariables.main();
