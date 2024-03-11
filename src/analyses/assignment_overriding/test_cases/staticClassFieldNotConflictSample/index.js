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
                        var StaticClassFieldNotConflictSample = /** @class */ (function () {
                            function StaticClassFieldNotConflictSample() {
                            }
                            StaticClassFieldNotConflictSample.main = function (args) {
                                StaticClassFieldNotConflictSample.foo();
                                StaticClassFieldNotConflictSample.base();
                                StaticClassFieldNotConflictSample.bar();
                            };
                            /*private*/ StaticClassFieldNotConflictSample.foo = function () {
                                StaticClassFieldNotConflictSample.y = 3;
                            };
                            /*private*/ StaticClassFieldNotConflictSample.base = function () {
                                StaticClassFieldNotConflictSample.y = 1;
                            };
                            /*private*/ StaticClassFieldNotConflictSample.bar = function () {
                                StaticClassFieldNotConflictSample.y = 4;
                            };
                            StaticClassFieldNotConflictSample.y = 0;
                            return StaticClassFieldNotConflictSample;
                        }());
                        ioa.StaticClassFieldNotConflictSample = StaticClassFieldNotConflictSample;
                        StaticClassFieldNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.StaticClassFieldNotConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.StaticClassFieldNotConflictSample.main(null);
