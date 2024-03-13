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
                        var ArraysClassFieldConflictSample = /** @class */ (function () {
                            function ArraysClassFieldConflictSample() {
                                if (this.y === undefined) {
                                    this.y = null;
                                }
                                this.y = [0];
                            }
                            ArraysClassFieldConflictSample.main = function (args) {
                                var m = new ArraysClassFieldConflictSample();
                                m.foo();
                                m.bar();
                            };
                            /*private*/ ArraysClassFieldConflictSample.prototype.foo = function () {
                                this.y[0] = 3;
                            };
                            /*private*/ ArraysClassFieldConflictSample.prototype.bar = function () {
                                this.y[0] = 4;
                            };
                            return ArraysClassFieldConflictSample;
                        }());
                        ioa.ArraysClassFieldConflictSample = ArraysClassFieldConflictSample;
                        ArraysClassFieldConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ArraysClassFieldConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ArraysClassFieldConflictSample.main(null);
