function ContainsInvokeExp() {
    this.x = 0;
    this.y = 0;
}

ContainsInvokeExp.prototype.main = function () {
    var m = new ContainsInvokeExp();

    m.x = 0; // LEFT
    m.y = 0;
    m.x = m.foo(); // RIGHT
};

ContainsInvokeExp.prototype.foo = function () {
    return 1;
};

var containsInvokeExp = new ContainsInvokeExp();
containsInvokeExp.main();
