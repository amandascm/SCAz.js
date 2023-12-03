function IdenticalClassSample() {
    this.att = 0;
}

IdenticalClassSample.prototype.setBar = function (bar) {
    this.att = bar;
};

IdenticalClassSample.prototype.setFoo = function (foo) {
    this.att = foo;
};

function DifferentMethodOnIdenticalClass() {
    this.identicalClassSample = new IdenticalClassSample();
}

DifferentMethodOnIdenticalClass.prototype.main = function () {
    var m = new DifferentMethodOnIdenticalClass();

    m.identicalClassSample.setFoo(1); // LEFT
    m.identicalClassSample.setBar(2); // RIGHT
};

var differentMethodOnIdenticalClass = new DifferentMethodOnIdenticalClass();
differentMethodOnIdenticalClass.main();
