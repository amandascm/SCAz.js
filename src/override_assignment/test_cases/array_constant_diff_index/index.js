function ArrayConstantSample() {
    this.arr = [0, 0, 0, 0, 0]
}

ArrayConstantSample.prototype.foo = function (i) {
    this.arr[i] = 1
}

ArrayConstantSample.prototype.bar = function (i) {
    this.arr[i] = 2
}

ArrayConstantSample.prototype.main = function () {
    var m = new ArrayConstantSample()

    m.foo(2) // LEFT
    m.bar(3) // RIGHT
}

var instance = new ArrayConstantSample()
instance.main()
