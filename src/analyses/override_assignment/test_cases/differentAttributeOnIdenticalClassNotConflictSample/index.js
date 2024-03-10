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
                        var DifferentAttributeOnIdenticalClassNotConflictSample = /** @class */ (function () {
                            function DifferentAttributeOnIdenticalClassNotConflictSample() {
                                if (this.objectSample1 === undefined) {
                                    this.objectSample1 = null;
                                }
                                if (this.objectSample2 === undefined) {
                                    this.objectSample2 = null;
                                }
                                this.objectSample1 = new br.unb.cic.analysis.samples.ioa.ObjectSample();
                                this.objectSample2 = new br.unb.cic.analysis.samples.ioa.ObjectSample();
                            }
                            DifferentAttributeOnIdenticalClassNotConflictSample.main = function (args) {
                                var m = new DifferentAttributeOnIdenticalClassNotConflictSample();
                                m.objectSample1.setFoo(1);
                                m.objectSample2.setBar(2);
                            };
                            return DifferentAttributeOnIdenticalClassNotConflictSample;
                        }());
                        ioa.DifferentAttributeOnIdenticalClassNotConflictSample = DifferentAttributeOnIdenticalClassNotConflictSample;
                        DifferentAttributeOnIdenticalClassNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.DifferentAttributeOnIdenticalClassNotConflictSample";
                        var ObjectSample = /** @class */ (function () {
                            function ObjectSample() {
                                if (this.foo === undefined) {
                                    this.foo = 0;
                                }
                                if (this.bar === undefined) {
                                    this.bar = 0;
                                }
                            }
                            ObjectSample.prototype.setBar = function (bar) {
                                this.bar = bar;
                            };
                            ObjectSample.prototype.setFoo = function (foo) {
                                this.foo = foo;
                            };
                            return ObjectSample;
                        }());
                        ioa.ObjectSample = ObjectSample;
                        ObjectSample["__class"] = "br.unb.cic.analysis.samples.ioa.ObjectSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.DifferentAttributeOnIdenticalClassNotConflictSample.main(null);
