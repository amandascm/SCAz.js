function ConcatMethods() {}

ConcatMethods.prototype.main = function () {
    var m = new ConcatMethods();

    var x = m.foo() + m.bar(); // LEFT i3 = $i0 + $i1 - x = $stack2 + $stack3
    x = x + m.qux();          // RIGHT i4 = i3 + $i2 - x = x + $stack4
};

ConcatMethods.prototype.foo = function () {
    return 1;
};

ConcatMethods.prototype.bar = function () {
    return 2;
};

ConcatMethods.prototype.qux = function () {
    return 3;
};

var concatMethods = new ConcatMethods();
concatMethods.main();
