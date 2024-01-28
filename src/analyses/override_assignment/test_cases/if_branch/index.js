function IfBranch() {
    this.x = 0;
}

IfBranch.prototype.main = function () {
    var m = new IfBranch();

    m.x = 0; // LEFT
    m.foo(); // RIGHT
};

IfBranch.prototype.foo = function () {
    if (this.x >= 0) {
        this.x = 1;
    } else {
        var a = 0;
        // console.log(this.x);
    }
};

var ifBranch = new IfBranch();
ifBranch.main();
