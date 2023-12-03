function Result() {
    this.foo = 0;
    this.bar = 0;
}

function ChangePublicAttributes() {}

ChangePublicAttributes.prototype.m = function () {
    var result = new Result(); // LEFT

    result.foo = 2; // RIGHT
    result.bar = 1; // LEFT
};

var changePublicAttributes = new ChangePublicAttributes();
changePublicAttributes.m();
