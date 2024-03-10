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
                        var ArraySameIndexConflictSample = /** @class */ (function () {
                            function ArraySameIndexConflictSample() {
                                if (this.arr === undefined) {
                                    this.arr = null;
                                }
                            }
                            ArraySameIndexConflictSample.main = function (args) {
                                var m = new ArraySameIndexConflictSample();
                                m.arr = [0, 0, 0, 0, 0];
                                m.foo();
                                m.bar();
                            };
                            /*private*/ ArraySameIndexConflictSample.prototype.foo = function () {
                                this.arr[1] = 1;
                            };
                            /*private*/ ArraySameIndexConflictSample.prototype.bar = function () {
                                this.arr[1] = 2;
                            };
                            return ArraySameIndexConflictSample;
                        }());
                        ioa.ArraySameIndexConflictSample = ArraySameIndexConflictSample;
                        ArraySameIndexConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ArraySameIndexConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ArraySameIndexConflictSample.main(null);
