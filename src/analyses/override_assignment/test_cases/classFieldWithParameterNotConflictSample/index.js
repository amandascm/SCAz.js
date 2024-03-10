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
                        var ClassFieldWithParameterNotConflictSample = /** @class */ (function () {
                            function ClassFieldWithParameterNotConflictSample() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                            }
                            ClassFieldWithParameterNotConflictSample.main = function (args) {
                                var m = new ClassFieldWithParameterNotConflictSample();
                                m.x = 0;
                                var a = 1;
                                m.foo(m.x);
                            };
                            /*private*/ ClassFieldWithParameterNotConflictSample.prototype.foo = function (a) {
                                this.x = a;
                            };
                            return ClassFieldWithParameterNotConflictSample;
                        }());
                        ioa.ClassFieldWithParameterNotConflictSample = ClassFieldWithParameterNotConflictSample;
                        ClassFieldWithParameterNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ClassFieldWithParameterNotConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ClassFieldWithParameterNotConflictSample.main(null);
