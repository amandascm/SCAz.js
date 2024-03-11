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
                        var IfBranchConflictSample = /** @class */ (function () {
                            function IfBranchConflictSample() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                            }
                            IfBranchConflictSample.main = function () {
                                var m = new IfBranchConflictSample();
                                m.x = 0;
                                m.foo();
                            };
                            /*private*/ IfBranchConflictSample.prototype.foo = function () {
                                if (this.x >= 0) {
                                    this.x = 1;
                                }
                                else {
                                    var a = 0;
                                }
                            };
                            return IfBranchConflictSample;
                        }());
                        ioa.IfBranchConflictSample = IfBranchConflictSample;
                        IfBranchConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.IfBranchConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.IfBranchConflictSample.main();
