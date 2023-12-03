function LocalArrayRecursive() {}

LocalArrayRecursive.prototype.main = function () {
    var m = new LocalArrayRecursive();

    m.foo(); // LEFT
    var y = 0;
    m.bar(); // RIGHT
};

LocalArrayRecursive.prototype.foo = function () {
    var arr = [0];
};

LocalArrayRecursive.prototype.bar = function () {
    var arr = [1];
};

var localArrayRecursive = new LocalArrayRecursive();
localArrayRecursive.main();
