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
                        var StaticClassFieldConflictSample = /** @class */ (function () {
                            function StaticClassFieldConflictSample() {
                            }
                            StaticClassFieldConflictSample.main = function (args) {
                                StaticClassFieldConflictSample.foo();
                                var x = StaticClassFieldConflictSample.base();
                                StaticClassFieldConflictSample.bar();
                            };
                            /*private*/ StaticClassFieldConflictSample.foo = function () {
                                StaticClassFieldConflictSample.y = 3;
                            };
                            /*private*/ StaticClassFieldConflictSample.base = function () {
                                return StaticClassFieldConflictSample.y + 1;
                            };
                            /*private*/ StaticClassFieldConflictSample.bar = function () {
                                StaticClassFieldConflictSample.y = 4;
                            };
                            StaticClassFieldConflictSample.y = 0;
                            return StaticClassFieldConflictSample;
                        }());
                        ioa.StaticClassFieldConflictSample = StaticClassFieldConflictSample;
                        StaticClassFieldConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.StaticClassFieldConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.StaticClassFieldConflictSample.main(null);
