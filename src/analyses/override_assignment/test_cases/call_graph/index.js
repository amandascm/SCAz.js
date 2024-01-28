// Class definitions
function CallGraphClass() {
    this.bar = 0;
}

CallGraphClass.prototype.barMethod = function () {
    this.bar = 2;
};

function CallGraphClassImplements() {
    CallGraphInterface.call(this);
    this.baz = 1;
}

CallGraphClassImplements.prototype = Object.create(CallGraphInterface.prototype);
CallGraphClassImplements.prototype.constructor = CallGraphClassImplements;

CallGraphClassImplements.prototype.bazMethod = function () {
    this.baz = 3;
};

function CallGraphInterface() {}

CallGraphInterface.prototype.bazMethod = function () {
    // To be implemented by subclasses
};

// Main function
var arr = [];

function main() {
    var callGraphInterface = new CallGraphClassImplements(); // LEFT
    callGraphInterface.bazMethod(); // RIGHT

    var callGraphClassImplements = new CallGraphClassImplements(); // LEFT
    callGraphClassImplements.bazMethod(); // RIGHT

    var callGraphClass = new CallGraphClass(); // LEFT
    callGraphClass.barMethod(); // RIGHT

    foo();

    var y = 1;
}

function foo() {
    arr[1] = 1;
}

main()