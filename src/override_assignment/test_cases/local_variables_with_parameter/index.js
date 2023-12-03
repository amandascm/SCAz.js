function LocalVariablesWithParameter() {}

LocalVariablesWithParameter.prototype.main = function () {
    var m = new LocalVariablesWithParameter();

    m.foo(0); // LEFT
    m.bar(1); // RIGHT
};

LocalVariablesWithParameter.prototype.foo = function (a) {
    var x = a;
};

LocalVariablesWithParameter.prototype.bar = function (a) {
    var x = a;
};

var localVariablesWithParameter = new LocalVariablesWithParameter();
localVariablesWithParameter.main();
