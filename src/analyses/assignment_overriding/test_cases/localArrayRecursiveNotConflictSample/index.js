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
                        var LocalArrayRecursiveNotConflictSample = /** @class */ (function () {
                            function LocalArrayRecursiveNotConflictSample() {
                            }
                            LocalArrayRecursiveNotConflictSample.main = function (args) {
                                var m = new LocalArrayRecursiveNotConflictSample();
                                m.foo();
                                var y = 0;
                                m.bar();
                            };
                            /*private*/ LocalArrayRecursiveNotConflictSample.prototype.foo = function () {
                                var arr = [0];
                            };
                            /*private*/ LocalArrayRecursiveNotConflictSample.prototype.bar = function () {
                                var arr = [1];
                            };
                            return LocalArrayRecursiveNotConflictSample;
                        }());
                        ioa.LocalArrayRecursiveNotConflictSample = LocalArrayRecursiveNotConflictSample;
                        LocalArrayRecursiveNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.LocalArrayRecursiveNotConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.LocalArrayRecursiveNotConflictSample.main(null);
