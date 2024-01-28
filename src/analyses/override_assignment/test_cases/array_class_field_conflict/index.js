function ArraysClassFieldConflictSample() {
    this.y = [0];

    this.foo = function () {
        this.y[0] = 3;
    };

    this.bar = function () {
        this.y[0] = 4;
    };
}

ArraysClassFieldConflictSample.main = function () {
    var m = new ArraysClassFieldConflictSample();
    m.foo(); // LEFT
    m.bar(); // RIGHT
};

ArraysClassFieldConflictSample.main();
