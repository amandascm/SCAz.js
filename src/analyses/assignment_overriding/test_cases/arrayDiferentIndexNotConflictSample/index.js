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
                        var ArrayDiferentIndexNotConflictSample = /** @class */ (function () {
                            function ArrayDiferentIndexNotConflictSample() {
                                if (this.arr === undefined) {
                                    this.arr = null;
                                }
                            }
                            ArrayDiferentIndexNotConflictSample.prototype.m = function () {
                                this.arr = [0, 0, 0, 0, 0];
                                this.foo();
                                this.bar();
                            };
                            /*private*/ ArrayDiferentIndexNotConflictSample.prototype.foo = function () {
                                this.arr[1] = 1;
                            };
                            /*private*/ ArrayDiferentIndexNotConflictSample.prototype.bar = function () {
                                this.arr[2] = 2;
                            };
                            ArrayDiferentIndexNotConflictSample.main = function (args) {
                                new ArrayDiferentIndexNotConflictSample().m();
                            };
                            return ArrayDiferentIndexNotConflictSample;
                        }());
                        ioa.ArrayDiferentIndexNotConflictSample = ArrayDiferentIndexNotConflictSample;
                        ArrayDiferentIndexNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ArrayDiferentIndexNotConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ArrayDiferentIndexNotConflictSample.main(null);
