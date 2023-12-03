function DefaultConstructor() {
    this.x = undefined;
}

DefaultConstructor.prototype.m = function () {
    var defaultConstructorConflictSample = new DefaultConstructor(); // LEFT
    var y = 2;
    defaultConstructorConflictSample.x = 1; // RIGHT
};

var defaultConstructor = new DefaultConstructor();
defaultConstructor.m();
