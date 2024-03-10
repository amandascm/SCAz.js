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
                        var ArrayAliasingConflictSample = /** @class */ (function () {
                            function ArrayAliasingConflictSample() {
                                if (this.arr === undefined) {
                                    this.arr = null;
                                }
                                if (this.__bar === undefined) {
                                    this.__bar = null;
                                }
                            }
                            ArrayAliasingConflictSample.main = function (args) {
                                var m = new ArrayAliasingConflictSample();
                                m.arr = [0, 0, 0, 0, 0];
                                m.__bar = m.arr;
                                m.foo();
                                m.bar();
                            };
                            /*private*/ ArrayAliasingConflictSample.prototype.foo = function () {
                                this.arr[1] = 1;
                            };
                            /*private*/ ArrayAliasingConflictSample.prototype.bar = function () {
                                this.__bar[1] = 2;
                            };
                            return ArrayAliasingConflictSample;
                        }());
                        ioa.ArrayAliasingConflictSample = ArrayAliasingConflictSample;
                        ArrayAliasingConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ArrayAliasingConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ArrayAliasingConflictSample.main(null);
