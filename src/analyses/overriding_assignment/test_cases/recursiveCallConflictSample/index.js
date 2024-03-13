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
                        var RecursiveCallConflictSample = /** @class */ (function () {
                            function RecursiveCallConflictSample() {
                            }
                            RecursiveCallConflictSample.main = function (args) {
                                var recursiveCallConflictSample = new RecursiveCallConflictSample();
                                recursiveCallConflictSample.foo(2);
                            };
                            /*private*/ RecursiveCallConflictSample.prototype.foo = function (n) {
                                if (n === 1) {
                                    return n;
                                }
                                return this.foo(n - 1) * n;
                            };
                            return RecursiveCallConflictSample;
                        }());
                        ioa.RecursiveCallConflictSample = RecursiveCallConflictSample;
                        RecursiveCallConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.RecursiveCallConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.RecursiveCallConflictSample.main(null);
