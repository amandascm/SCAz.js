function ArraysClassField() {}

ArraysClassField.y = [];

ArraysClassField.foo = function () {
  ArraysClassField.y[0] = 3;
};

ArraysClassField.base = function () {
  ArraysClassField.y[1] = 1;
};

ArraysClassField.bar = function () {
  ArraysClassField.y[3] = 4;
};

ArraysClassField.main = function () {
  ArraysClassField.foo();  // LEFT
  ArraysClassField.base();
  ArraysClassField.bar();  // RIGHT
};

ArraysClassField.main();
