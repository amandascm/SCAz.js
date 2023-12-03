function IfWithInvoke() {
    this.x = 0;
    this.y = 0;
}

IfWithInvoke.prototype.main = function () {
    var m = new IfWithInvoke();

    m.x = 0; // LEFT
    m.y = 0;
    if (m.foo()) { // RIGHT
        m.y = 1;
    }
};

IfWithInvoke.prototype.foo = function () {
    this.x = 1;
    return true;
};

var ifWithInvoke = new IfWithInvoke();
ifWithInvoke.main();
