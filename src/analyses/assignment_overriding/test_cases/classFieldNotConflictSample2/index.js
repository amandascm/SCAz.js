/* Generated from Java with JSweet 3.0.0 - http://www.jsweet.org */
var br;
(function (br) {
    var unb;
    (function (unb) {
        var cic;
        (function (cic) {
            var analysis;
            (function (analysis) {
                var samples;
                (function (samples) {
                    var ioa;
                    (function (ioa) {
                        var ClassFieldNotConflictSample2 = /** @class */ (function () {
                            function ClassFieldNotConflictSample2() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                            }
                            ClassFieldNotConflictSample2.main = function (args) {
                                var m = new ClassFieldNotConflictSample2();
                                m.foo();
                                m.base();
                                m.bar();
                            };
                            /*private*/ ClassFieldNotConflictSample2.prototype.base = function () {
                                this.x = 0;
                            };
                            /*private*/ ClassFieldNotConflictSample2.prototype.foo = function () {
                                this.x = 1;
                            };
                            /*private*/ ClassFieldNotConflictSample2.prototype.bar = function () {
                                this.x = 2;
                            };
                            return ClassFieldNotConflictSample2;
                        }());
                        ioa.ClassFieldNotConflictSample2 = ClassFieldNotConflictSample2;
                        ClassFieldNotConflictSample2["__class"] = "br.unb.cic.analysis.samples.ioa.ClassFieldNotConflictSample2";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ClassFieldNotConflictSample2.main(null);
