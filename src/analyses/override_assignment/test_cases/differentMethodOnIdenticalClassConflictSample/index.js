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
                        var DifferentMethodOnIdenticalClassConflictSample = /** @class */ (function () {
                            function DifferentMethodOnIdenticalClassConflictSample() {
                                if (this.identicalClassSample === undefined) {
                                    this.identicalClassSample = null;
                                }
                            }
                            DifferentMethodOnIdenticalClassConflictSample.main = function (args) {
                                var m = new DifferentMethodOnIdenticalClassConflictSample();
                                m.identicalClassSample = new br.unb.cic.analysis.samples.ioa.IdenticalClassSample();
                                m.identicalClassSample.setFoo(1);
                                m.identicalClassSample.setBar(2);
                            };
                            return DifferentMethodOnIdenticalClassConflictSample;
                        }());
                        ioa.DifferentMethodOnIdenticalClassConflictSample = DifferentMethodOnIdenticalClassConflictSample;
                        DifferentMethodOnIdenticalClassConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.DifferentMethodOnIdenticalClassConflictSample";
                        var IdenticalClassSample = /** @class */ (function () {
                            function IdenticalClassSample() {
                                if (this.att === undefined) {
                                    this.att = 0;
                                }
                            }
                            IdenticalClassSample.prototype.setBar = function (bar) {
                                this.att = bar;
                            };
                            IdenticalClassSample.prototype.setFoo = function (foo) {
                                this.att = foo;
                            };
                            return IdenticalClassSample;
                        }());
                        ioa.IdenticalClassSample = IdenticalClassSample;
                        IdenticalClassSample["__class"] = "br.unb.cic.analysis.samples.ioa.IdenticalClassSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.DifferentMethodOnIdenticalClassConflictSample.main(null);
