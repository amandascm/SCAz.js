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
                        var OverridingAssignmentInstance = /** @class */ (function () {
                            function OverridingAssignmentInstance() {
                                if (this.a === undefined) {
                                    this.a = 0;
                                }
                                if (this.b === undefined) {
                                    this.b = 0;
                                }
                            }
                            return OverridingAssignmentInstance;
                        }());
                        ioa.OverridingAssignmentInstance = OverridingAssignmentInstance;
                        OverridingAssignmentInstance["__class"] = "br.unb.cic.analysis.samples.ioa.OverridingAssignmentInstance";
                        var OverridingAssignmentInstance2 = /** @class */ (function () {
                            function OverridingAssignmentInstance2() {
                                if (this.a === undefined) {
                                    this.a = new OverridingAssignmentInstance();
                                }
                                if (this.b === undefined) {
                                    this.b = new OverridingAssignmentInstance();
                                }
                            }
                            return OverridingAssignmentInstance2;
                        }());
                        ioa.OverridingAssignmentInstance2 = OverridingAssignmentInstance2;
                        OverridingAssignmentInstance2["__class"] = "br.unb.cic.analysis.samples.ioa.OverridingAssignmentInstance2";
                        var ObjectThreeFieldsOneConflictSample = /** @class */ (function () {
                            function ObjectThreeFieldsOneConflictSample() {
                                if (this.a === undefined) {
                                    this.a = new OverridingAssignmentInstance2();
                                }
                                if (this.b === undefined) {
                                    this.b = new OverridingAssignmentInstance2();
                                }
                            }
                            ObjectThreeFieldsOneConflictSample.main = function (args) {
                                ObjectThreeFieldsOneConflictSample.instanceLocal = new ObjectThreeFieldsOneConflictSample();
                                ObjectThreeFieldsOneConflictSample.instanceLocal.foo();
                                ObjectThreeFieldsOneConflictSample.instanceLocal.bar();
                                ObjectThreeFieldsOneConflictSample.instanceLocal.base();
                                ObjectThreeFieldsOneConflictSample.instanceLocal.baz();
                                ObjectThreeFieldsOneConflictSample.instanceLocal.qux();
                            };
                            /*private*/ ObjectThreeFieldsOneConflictSample.prototype.foo = function () {
                                ObjectThreeFieldsOneConflictSample.instanceLocal.b.a.a = ObjectThreeFieldsOneConflictSample.instanceLocal.b.a.a + 3;
                            };
                            /*private*/ ObjectThreeFieldsOneConflictSample.prototype.base = function () {
                                ObjectThreeFieldsOneConflictSample.instanceLocal.b.a.a = 7;
                            };
                            /*private*/ ObjectThreeFieldsOneConflictSample.prototype.bar = function () {
                                ObjectThreeFieldsOneConflictSample.instanceLocal.b.a.b = 3;
                            };
                            /*private*/ ObjectThreeFieldsOneConflictSample.prototype.baz = function () {
                                ObjectThreeFieldsOneConflictSample.instanceLocal.b.a.b = 4;
                            };
                            /*private*/ ObjectThreeFieldsOneConflictSample.prototype.qux = function () {
                                ObjectThreeFieldsOneConflictSample.instanceLocal.b.a.a = 4;
                            };
                            ObjectThreeFieldsOneConflictSample.instanceLocal = null;
                            return ObjectThreeFieldsOneConflictSample;
                        }());
                        ioa.ObjectThreeFieldsOneConflictSample = ObjectThreeFieldsOneConflictSample;
                        ObjectThreeFieldsOneConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ObjectThreeFieldsOneConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ObjectThreeFieldsOneConflictSample.main(null);
