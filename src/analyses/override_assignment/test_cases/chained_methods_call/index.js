function Settings(settings) {
    this.settings = settings;
}

Settings.settingsBuilder = function () {
    return new Settings.Builder();
};

Settings.Builder = function () {
    this.obj = 0;
};

Settings.Builder.prototype.method1 = function () {
    this.obj = 1;
    return this;
};

Settings.Builder.prototype.method2 = function () {
    console.log(this.obj)
    return this;
};

Settings.Builder.prototype.method3 = function () {
    this.obj = 2;
    return this;
};

var a = Settings
    .settingsBuilder()
    .method1() // LEFT
    .method2()
    .method3() // RIGHT
