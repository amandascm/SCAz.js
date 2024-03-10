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
                        var RecursiveMockupNotConflictSample = /** @class */ (function () {
                            function RecursiveMockupNotConflictSample() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                            }
                            RecursiveMockupNotConflictSample.main = function (args) {
                                var m = new RecursiveMockupNotConflictSample();
                                m.foo();
                                m.x = 3;
                                m.foo();
                            };
                            /*private*/ RecursiveMockupNotConflictSample.prototype.foo = function () {
                                this.x += 1;
                            };
                            return RecursiveMockupNotConflictSample;
                        }());
                        ioa.RecursiveMockupNotConflictSample = RecursiveMockupNotConflictSample;
                        RecursiveMockupNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.RecursiveMockupNotConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.RecursiveMockupNotConflictSample.main(null);
