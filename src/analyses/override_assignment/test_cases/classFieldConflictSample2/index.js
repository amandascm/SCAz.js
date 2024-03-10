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
                        var ClassFieldConflictSample2 = /** @class */ (function () {
                            function ClassFieldConflictSample2() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                            }
                            ClassFieldConflictSample2.main = function (args) {
                                var m = new ClassFieldConflictSample2();
                                m.foo();
                                m.bar();
                            };
                            /*private*/ ClassFieldConflictSample2.prototype.foo = function () {
                                this.x = 0;
                            };
                            /*private*/ ClassFieldConflictSample2.prototype.bar = function () {
                                this.x = 1;
                            };
                            return ClassFieldConflictSample2;
                        }());
                        ioa.ClassFieldConflictSample2 = ClassFieldConflictSample2;
                        ClassFieldConflictSample2["__class"] = "br.unb.cic.analysis.samples.ioa.ClassFieldConflictSample2";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ClassFieldConflictSample2.main(null);
