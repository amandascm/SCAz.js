function LocalArray() {}

LocalArray.prototype.main = function () {
    var m = new LocalArray();

    m.foo(); // LEFT
    m.bar(); // RIGHT
};

LocalArray.prototype.foo = function () {
    var arr = [0];
};

LocalArray.prototype.bar = function () {
    var arr = [1];
};

var localArray = new LocalArray();
localArray.main();
