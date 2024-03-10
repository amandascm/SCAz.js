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
                        var DifferentClassWithSameAttributeNotConflictSample = /** @class */ (function () {
                            function DifferentClassWithSameAttributeNotConflictSample() {
                                if (this.objectExample === undefined) {
                                    this.objectExample = null;
                                }
                                if (this.objectExample2 === undefined) {
                                    this.objectExample2 = null;
                                }
                                this.objectExample = new br.unb.cic.analysis.samples.ioa.ObjectExample();
                                this.objectExample2 = new br.unb.cic.analysis.samples.ioa.ObjectExample2();
                            }
                            DifferentClassWithSameAttributeNotConflictSample.main = function (args) {
                                var m = new DifferentClassWithSameAttributeNotConflictSample();
                                m.objectExample.setFoo(1);
                                m.objectExample2.setFoo(2);
                            };
                            return DifferentClassWithSameAttributeNotConflictSample;
                        }());
                        ioa.DifferentClassWithSameAttributeNotConflictSample = DifferentClassWithSameAttributeNotConflictSample;
                        DifferentClassWithSameAttributeNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.DifferentClassWithSameAttributeNotConflictSample";
                        var ObjectExample = /** @class */ (function () {
                            function ObjectExample() {
                                if (this.foo === undefined) {
                                    this.foo = 0;
                                }
                            }
                            ObjectExample.prototype.setFoo = function (foo) {
                                this.foo = foo;
                            };
                            return ObjectExample;
                        }());
                        ioa.ObjectExample = ObjectExample;
                        ObjectExample["__class"] = "br.unb.cic.analysis.samples.ioa.ObjectExample";
                        var ObjectExample2 = /** @class */ (function () {
                            function ObjectExample2() {
                                if (this.foo === undefined) {
                                    this.foo = 0;
                                }
                            }
                            ObjectExample2.prototype.setFoo = function (foo) {
                                this.foo = foo;
                            };
                            return ObjectExample2;
                        }());
                        ioa.ObjectExample2 = ObjectExample2;
                        ObjectExample2["__class"] = "br.unb.cic.analysis.samples.ioa.ObjectExample2";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.DifferentClassWithSameAttributeNotConflictSample.main(null);
