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
                        var ConcatMethodsConflictSample = /** @class */ (function () {
                            function ConcatMethodsConflictSample() {
                            }
                            ConcatMethodsConflictSample.main = function (args) {
                                var m = new ConcatMethodsConflictSample();
                                var x = m.foo() + m.bar();
                                x = x + m.qux();
                            };
                            /*private*/ ConcatMethodsConflictSample.prototype.foo = function () {
                                return 1;
                            };
                            /*private*/ ConcatMethodsConflictSample.prototype.bar = function () {
                                return 2;
                            };
                            /*private*/ ConcatMethodsConflictSample.prototype.qux = function () {
                                return 3;
                            };
                            return ConcatMethodsConflictSample;
                        }());
                        ioa.ConcatMethodsConflictSample = ConcatMethodsConflictSample;
                        ConcatMethodsConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ConcatMethodsConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ConcatMethodsConflictSample.main(null);
