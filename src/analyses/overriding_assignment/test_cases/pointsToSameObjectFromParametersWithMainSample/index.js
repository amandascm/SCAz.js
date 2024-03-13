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
                        var Point = /** @class */ (function () {
                            function Point() {
                                if (this.x === undefined) {
                                    this.x = null;
                                }
                                if (this.y === undefined) {
                                    this.y = null;
                                }
                                if (this.z === undefined) {
                                    this.z = null;
                                }
                                this.x = 0;
                                this.y = 0;
                                this.z = new Point();
                            }
                            return Point;
                        }());
                        ioa.Point = Point;
                        Point["__class"] = "br.unb.cic.analysis.samples.ioa.Point";
                        var PointsToSameObjectFromParametersWithMainSample = /** @class */ (function () {
                            function PointsToSameObjectFromParametersWithMainSample() {
                            }
                            PointsToSameObjectFromParametersWithMainSample.main = function () {
                                PointsToSameObjectFromParametersWithMainSample.m(new br.unb.cic.analysis.samples.ioa.Point(), new br.unb.cic.analysis.samples.ioa.Point());
                            };
                            PointsToSameObjectFromParametersWithMainSample.m = function (p1, p2) {
                                p1.x = new Number(10).valueOf();
                                var s = "base";
                                p1.x = new Number(20).valueOf();
                            };
                            return PointsToSameObjectFromParametersWithMainSample;
                        }());
                        ioa.PointsToSameObjectFromParametersWithMainSample = PointsToSameObjectFromParametersWithMainSample;
                        PointsToSameObjectFromParametersWithMainSample["__class"] = "br.unb.cic.analysis.samples.ioa.PointsToSameObjectFromParametersWithMainSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.PointsToSameObjectFromParametersWithMainSample.main();
