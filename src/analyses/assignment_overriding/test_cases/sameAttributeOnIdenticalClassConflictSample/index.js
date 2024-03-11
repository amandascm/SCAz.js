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
                        var SameAttributeOnIdenticalClassConflictSample = /** @class */ (function () {
                            function SameAttributeOnIdenticalClassConflictSample() {
                            }
                            SameAttributeOnIdenticalClassConflictSample.main = function (args) {
                                var testObject = new br.unb.cic.analysis.samples.ioa.TestObject();
                                testObject.setFoo(1);
                                testObject.setFoo(2);
                            };
                            return SameAttributeOnIdenticalClassConflictSample;
                        }());
                        ioa.SameAttributeOnIdenticalClassConflictSample = SameAttributeOnIdenticalClassConflictSample;
                        SameAttributeOnIdenticalClassConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.SameAttributeOnIdenticalClassConflictSample";
                        var TestObject = /** @class */ (function () {
                            function TestObject() {
                                if (this.foo === undefined) {
                                    this.foo = 0;
                                }
                            }
                            TestObject.prototype.setFoo = function (foo) {
                                this.foo = foo;
                            };
                            return TestObject;
                        }());
                        ioa.TestObject = TestObject;
                        TestObject["__class"] = "br.unb.cic.analysis.samples.ioa.TestObject";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.SameAttributeOnIdenticalClassConflictSample.main(null);
