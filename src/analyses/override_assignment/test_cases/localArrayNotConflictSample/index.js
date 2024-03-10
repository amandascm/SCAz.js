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
                        var LocalArrayNotConflictSample = /** @class */ (function () {
                            function LocalArrayNotConflictSample() {
                            }
                            LocalArrayNotConflictSample.main = function (args) {
                                var m = new LocalArrayNotConflictSample();
                                m.foo();
                                m.bar();
                            };
                            /*private*/ LocalArrayNotConflictSample.prototype.foo = function () {
                                var arr = [0];
                            };
                            /*private*/ LocalArrayNotConflictSample.prototype.bar = function () {
                                var arr = [1];
                            };
                            return LocalArrayNotConflictSample;
                        }());
                        ioa.LocalArrayNotConflictSample = LocalArrayNotConflictSample;
                        LocalArrayNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.LocalArrayNotConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.LocalArrayNotConflictSample.main(null);
