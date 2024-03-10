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
                        var ContainsInvokeExpConflictSample = /** @class */ (function () {
                            function ContainsInvokeExpConflictSample() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                                if (this.y === undefined) {
                                    this.y = 0;
                                }
                            }
                            ContainsInvokeExpConflictSample.main = function () {
                                var m = new ContainsInvokeExpConflictSample();
                                m.x = 0;
                                m.y = 0;
                                m.x = m.foo();
                            };
                            /*private*/ ContainsInvokeExpConflictSample.prototype.foo = function () {
                                return 1;
                            };
                            return ContainsInvokeExpConflictSample;
                        }());
                        ioa.ContainsInvokeExpConflictSample = ContainsInvokeExpConflictSample;
                        ContainsInvokeExpConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ContainsInvokeExpConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ContainsInvokeExpConflictSample.main();
