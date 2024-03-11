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
                        var ObjectFieldNotConflictSample = /** @class */ (function () {
                            function ObjectFieldNotConflictSample() {
                            }
                            ObjectFieldNotConflictSample.main = function () {
                                var objectFieldNotConflict = new br.unb.cic.analysis.samples.ioa.ObjectFieldNotConflict();
                                objectFieldNotConflict.foo(1);
                                var objectFieldNotConflict2 = new br.unb.cic.analysis.samples.ioa.ObjectFieldNotConflict();
                                objectFieldNotConflict2.bar(0);
                            };
                            return ObjectFieldNotConflictSample;
                        }());
                        ioa.ObjectFieldNotConflictSample = ObjectFieldNotConflictSample;
                        ObjectFieldNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ObjectFieldNotConflictSample";
                        var ObjectFieldNotConflict = /** @class */ (function () {
                            function ObjectFieldNotConflict() {
                                if (this.at === undefined) {
                                    this.at = 0;
                                }
                            }
                            ObjectFieldNotConflict.prototype.foo = function (a) {
                                this.at = a + 1;
                            };
                            ObjectFieldNotConflict.prototype.bar = function (a) {
                                this.at = a;
                            };
                            return ObjectFieldNotConflict;
                        }());
                        ioa.ObjectFieldNotConflict = ObjectFieldNotConflict;
                        ObjectFieldNotConflict["__class"] = "br.unb.cic.analysis.samples.ioa.ObjectFieldNotConflict";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ObjectFieldNotConflictSample.main();
