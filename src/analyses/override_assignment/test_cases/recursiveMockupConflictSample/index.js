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
                        var RecursiveMockupConflictSample = /** @class */ (function () {
                            function RecursiveMockupConflictSample() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                            }
                            RecursiveMockupConflictSample.main = function (args) {
                                var m = new RecursiveMockupConflictSample();
                                m.foo();
                                m.foo();
                            };
                            /*private*/ RecursiveMockupConflictSample.prototype.foo = function () {
                                this.x += 1;
                            };
                            return RecursiveMockupConflictSample;
                        }());
                        ioa.RecursiveMockupConflictSample = RecursiveMockupConflictSample;
                        RecursiveMockupConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.RecursiveMockupConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.RecursiveMockupConflictSample.main(null);
