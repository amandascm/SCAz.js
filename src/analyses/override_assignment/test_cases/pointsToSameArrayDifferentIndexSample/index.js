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
                        var PointsToSameArrayDifferentIndexSample = /** @class */ (function () {
                            function PointsToSameArrayDifferentIndexSample() {
                            }
                            PointsToSameArrayDifferentIndexSample.prototype.m = function (i) {
                                var a = [0, 0];
                                a[1] = 5;
                                var b = a;
                                b[0] = 6;
                            };
                            PointsToSameArrayDifferentIndexSample.main = function () {
                                (new PointsToSameArrayDifferentIndexSample()).m(0);
                            };
                            return PointsToSameArrayDifferentIndexSample;
                        }());
                        ioa.PointsToSameArrayDifferentIndexSample = PointsToSameArrayDifferentIndexSample;
                        PointsToSameArrayDifferentIndexSample["__class"] = "br.unb.cic.analysis.samples.ioa.PointsToSameArrayDifferentIndexSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.PointsToSameArrayDifferentIndexSample.main();
