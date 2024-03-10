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
                        var ChangePublicAttributesConflictSample = /** @class */ (function () {
                            function ChangePublicAttributesConflictSample() {
                            }
                            ChangePublicAttributesConflictSample.main = function () {
                                var result = new br.unb.cic.analysis.samples.ioa.Result();
                                result.foo = 2;
                                result.bar = 1;
                            };
                            return ChangePublicAttributesConflictSample;
                        }());
                        ioa.ChangePublicAttributesConflictSample = ChangePublicAttributesConflictSample;
                        ChangePublicAttributesConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ChangePublicAttributesConflictSample";
                        var Result = /** @class */ (function () {
                            function Result() {
                                if (this.foo === undefined) {
                                    this.foo = 0;
                                }
                                if (this.bar === undefined) {
                                    this.bar = 0;
                                }
                                this.foo = 0;
                                this.bar = 0;
                            }
                            return Result;
                        }());
                        ioa.Result = Result;
                        Result["__class"] = "br.unb.cic.analysis.samples.ioa.Result";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ChangePublicAttributesConflictSample.main();
