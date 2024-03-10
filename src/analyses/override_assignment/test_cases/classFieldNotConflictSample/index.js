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
                        var ClassFieldNotConflictSample = /** @class */ (function () {
                            function ClassFieldNotConflictSample() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                            }
                            ClassFieldNotConflictSample.main = function (args) {
                                var m = new ClassFieldNotConflictSample();
                                m.x = 1;
                                m.base();
                                m.foo();
                            };
                            /*private*/ ClassFieldNotConflictSample.prototype.base = function () {
                                this.x = 0;
                            };
                            /*private*/ ClassFieldNotConflictSample.prototype.foo = function () {
                                this.x = 2;
                            };
                            return ClassFieldNotConflictSample;
                        }());
                        ioa.ClassFieldNotConflictSample = ClassFieldNotConflictSample;
                        ClassFieldNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ClassFieldNotConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ClassFieldNotConflictSample.main(null);
