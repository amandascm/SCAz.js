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
                        var BaseConflictSample = /** @class */ (function () {
                            function BaseConflictSample() {
                                if (this.text === undefined) {
                                    this.text = null;
                                }
                                if (this.fixes === undefined) {
                                    this.fixes = 0;
                                }
                                if (this.comments === undefined) {
                                    this.comments = 0;
                                }
                            }
                            BaseConflictSample.main = function () {
                                var baseConflictSample = new BaseConflictSample();
                                baseConflictSample.countFixes();
                            };
                            BaseConflictSample.prototype.countFixes = function () {
                                this.countDupWhitespace();
                                this.countComments();
                                this.countDupWords();
                                return this.fixes;
                            };
                            /*private*/ BaseConflictSample.prototype.countDupWords = function () {
                                this.fixes = this.fixes + 2;
                            };
                            /*private*/ BaseConflictSample.prototype.countComments = function () {
                                this.comments = this.comments + 1;
                            };
                            /*private*/ BaseConflictSample.prototype.countDupWhitespace = function () {
                                this.fixes = this.fixes + 1;
                            };
                            return BaseConflictSample;
                        }());
                        ioa.BaseConflictSample = BaseConflictSample;
                        BaseConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.BaseConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.BaseConflictSample.main();
