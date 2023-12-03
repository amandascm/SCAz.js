function ObjectSample() {
    this.foo = 0;
    this.bar = 0;
}

ObjectSample.prototype.setBar = function (bar) {
    this.bar = bar;
};

ObjectSample.prototype.setFoo = function (foo) {
    this.foo = foo;
};

function DifferentAttributeOnIdenticalClass() {
    this.objectSample1 = new ObjectSample();
    this.objectSample2 = new ObjectSample();
}

DifferentAttributeOnIdenticalClass.prototype.main = function () {
    var m = new DifferentAttributeOnIdenticalClass();

    m.objectSample1.setFoo(1); // LEFT
    m.objectSample2.setBar(2); // RIGHT
};

var differentAttributeOnIdenticalClass = new DifferentAttributeOnIdenticalClass();
differentAttributeOnIdenticalClass.main();
