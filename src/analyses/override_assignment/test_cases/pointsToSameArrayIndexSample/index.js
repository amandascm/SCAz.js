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
                        var PointsToSameArrayIndexSample = /** @class */ (function () {
                            function PointsToSameArrayIndexSample() {
                            }
                            PointsToSameArrayIndexSample.prototype.m = function (i) {
                                var a = [0, 0];
                                a[i] = 5;
                                var b = a;
                                b[i] = 6;
                            };
                            PointsToSameArrayIndexSample.main = function () {
                                (new PointsToSameArrayIndexSample()).m(1);
                            };
                            return PointsToSameArrayIndexSample;
                        }());
                        ioa.PointsToSameArrayIndexSample = PointsToSameArrayIndexSample;
                        PointsToSameArrayIndexSample["__class"] = "br.unb.cic.analysis.samples.ioa.PointsToSameArrayIndexSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.PointsToSameArrayIndexSample.main();
