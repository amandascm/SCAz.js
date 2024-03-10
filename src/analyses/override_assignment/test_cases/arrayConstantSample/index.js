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
                        var ArrayConstantSample = /** @class */ (function () {
                            function ArrayConstantSample() {
                                if (this.arr === undefined) {
                                    this.arr = null;
                                }
                            }
                            ArrayConstantSample.main = function (args) {
                                var m = new ArrayConstantSample();
                                m.arr = [0, 0, 0, 0, 0];
                                m.foo(3);
                                var b = 0;
                                m.bar(2);
                            };
                            /*private*/ ArrayConstantSample.prototype.foo = function (i) {
                                this.arr[i] = 1;
                            };
                            /*private*/ ArrayConstantSample.prototype.bar = function (i) {
                                this.arr[i] = 2;
                            };
                            return ArrayConstantSample;
                        }());
                        ioa.ArrayConstantSample = ArrayConstantSample;
                        ArrayConstantSample["__class"] = "br.unb.cic.analysis.samples.ioa.ArrayConstantSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ArrayConstantSample.main(null);
