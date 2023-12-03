function ChangeInstanceAttribute() {
    this.instanceAttributeSample = null;
}

ChangeInstanceAttribute.prototype.main = function () {
    var m = new ChangeInstanceAttribute();

    m.instanceAttributeSample = new InstanceAttributeSample(); // LEFT
    m.instanceAttributeSample.setFoo(2); // RIGHT
};

function InstanceAttributeSample() {
    this.att = 0;
}

InstanceAttributeSample.prototype.setFoo = function (foo) {
    this.att = foo;
};

var changeInstanceAttribute = new ChangeInstanceAttribute();
changeInstanceAttribute.main();
