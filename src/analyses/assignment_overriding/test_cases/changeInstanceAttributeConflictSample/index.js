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
                        var ChangeInstanceAttributeConflictSample = /** @class */ (function () {
                            function ChangeInstanceAttributeConflictSample() {
                                if (this.instanceAttributeSample === undefined) {
                                    this.instanceAttributeSample = null;
                                }
                            }
                            ChangeInstanceAttributeConflictSample.main = function (args) {
                                var m = new ChangeInstanceAttributeConflictSample();
                                m.instanceAttributeSample = new br.unb.cic.analysis.samples.ioa.InstanceAttributeSample();
                                m.instanceAttributeSample.setFoo(2);
                            };
                            return ChangeInstanceAttributeConflictSample;
                        }());
                        ioa.ChangeInstanceAttributeConflictSample = ChangeInstanceAttributeConflictSample;
                        ChangeInstanceAttributeConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ChangeInstanceAttributeConflictSample";
                        var InstanceAttributeSample = /** @class */ (function () {
                            function InstanceAttributeSample() {
                                if (this.att === undefined) {
                                    this.att = 0;
                                }
                                this.att = 0;
                            }
                            InstanceAttributeSample.prototype.setFoo = function (foo) {
                                this.att = foo;
                            };
                            return InstanceAttributeSample;
                        }());
                        ioa.InstanceAttributeSample = InstanceAttributeSample;
                        InstanceAttributeSample["__class"] = "br.unb.cic.analysis.samples.ioa.InstanceAttributeSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ChangeInstanceAttributeConflictSample.main(null);
