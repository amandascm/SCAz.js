function BothMarking() {
    this.x = 0;
}

BothMarking.prototype.foo = function () {
    this.x = 1; // RIGHT
};

// Example usage:
var sample = new BothMarking();
sample.foo(); // LEFT
