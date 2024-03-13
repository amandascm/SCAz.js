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
                        var PointsToSameObjectFromParametersSample4 = /** @class */ (function () {
                            function PointsToSameObjectFromParametersSample4() {
                            }
                            PointsToSameObjectFromParametersSample4.prototype.m = function (p1, p2) {
                                p1.x = new Number(10).valueOf();
                                p2 = p1;
                                p2.x = new Number(20).valueOf();
                            };
                            PointsToSameObjectFromParametersSample4.main = function () {
                                (new PointsToSameObjectFromParametersSample4()).m(new br.unb.cic.analysis.samples.ioa.Point(), new br.unb.cic.analysis.samples.ioa.Point());
                            };
                            return PointsToSameObjectFromParametersSample4;
                        }());
                        ioa.PointsToSameObjectFromParametersSample4 = PointsToSameObjectFromParametersSample4;
                        PointsToSameObjectFromParametersSample4["__class"] = "br.unb.cic.analysis.samples.ioa.PointsToSameObjectFromParametersSample4";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.PointsToSameObjectFromParametersSample4.main();
