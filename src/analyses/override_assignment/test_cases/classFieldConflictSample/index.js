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
                        var ClassFieldConflictSample = /** @class */ (function () {
                            function ClassFieldConflictSample() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                            }
                            ClassFieldConflictSample.main = function (args) {
                                var m = new ClassFieldConflictSample();
                                m.x = 0;
                                m.foo();
                            };
                            /*private*/ ClassFieldConflictSample.prototype.foo = function () {
                                this.x = 1;
                            };
                            return ClassFieldConflictSample;
                        }());
                        ioa.ClassFieldConflictSample = ClassFieldConflictSample;
                        ClassFieldConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ClassFieldConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ClassFieldConflictSample.main(null);
