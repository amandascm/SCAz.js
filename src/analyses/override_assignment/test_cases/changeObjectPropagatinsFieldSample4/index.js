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
                        var ChangeObjectPropagatinsFieldSample4 = /** @class */ (function () {
                            function ChangeObjectPropagatinsFieldSample4() {
                            }
                            ChangeObjectPropagatinsFieldSample4.main = function (args) {
                                var c = new br.unb.cic.analysis.samples.ioa.Point();
                                var d = new br.unb.cic.analysis.samples.ioa.Point();
                                c.z = d;
                                var base = 0;
                                c.z.y = 5;
                            };
                            return ChangeObjectPropagatinsFieldSample4;
                        }());
                        ioa.ChangeObjectPropagatinsFieldSample4 = ChangeObjectPropagatinsFieldSample4;
                        ChangeObjectPropagatinsFieldSample4["__class"] = "br.unb.cic.analysis.samples.ioa.ChangeObjectPropagatinsFieldSample4";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ChangeObjectPropagatinsFieldSample4.main(null);
