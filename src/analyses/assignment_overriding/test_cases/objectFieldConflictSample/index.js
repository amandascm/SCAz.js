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
                        var ObjectFieldConflictSample = /** @class */ (function () {
                            function ObjectFieldConflictSample() {
                            }
                            ObjectFieldConflictSample.main = function () {
                                var c = new br.unb.cic.analysis.samples.ioa.ObjectFieldConflict();
                                c.foo(1);
                                var d = c;
                                d.bar(0);
                            };
                            return ObjectFieldConflictSample;
                        }());
                        ioa.ObjectFieldConflictSample = ObjectFieldConflictSample;
                        ObjectFieldConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ObjectFieldConflictSample";
                        var ObjectFieldConflict = /** @class */ (function () {
                            function ObjectFieldConflict() {
                                if (this.at === undefined) {
                                    this.at = 0;
                                }
                            }
                            ObjectFieldConflict.prototype.foo = function (a) {
                                this.at = a + 1;
                            };
                            ObjectFieldConflict.prototype.bar = function (a) {
                                this.at = a;
                            };
                            return ObjectFieldConflict;
                        }());
                        ioa.ObjectFieldConflict = ObjectFieldConflict;
                        ObjectFieldConflict["__class"] = "br.unb.cic.analysis.samples.ioa.ObjectFieldConflict";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ObjectFieldConflictSample.main();
