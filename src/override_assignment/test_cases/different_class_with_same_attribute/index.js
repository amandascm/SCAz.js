function ObjectExample() {
    this.foo = 0;
}

ObjectExample.prototype.setFoo = function (foo) {
    this.foo = foo;
};

function ObjectExample2() {
    this.foo = 0;
}

ObjectExample2.prototype.setFoo = function (foo) {
    this.foo = foo;
};

function DifferentClassWithSameAttribute() {
    this.objectExample = new ObjectExample();
    this.objectExample2 = new ObjectExample2();
}

DifferentClassWithSameAttribute.prototype.main = function () {
    var m = new DifferentClassWithSameAttribute();

    m.objectExample.setFoo(1); // LEFT
    m.objectExample2.setFoo(2); // RIGHT
};

var differentClassWithSameAttribute = new DifferentClassWithSameAttribute();
differentClassWithSameAttribute.main();
