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
                        var BaseNotConflictSample = /** @class */ (function () {
                            function BaseNotConflictSample() {
                                if (this.text === undefined) {
                                    this.text = null;
                                }
                            }
                            BaseNotConflictSample.main = function () {
                                var baseNotConflictSample = new BaseNotConflictSample();
                                baseNotConflictSample.cleanText();
                            };
                            BaseNotConflictSample.prototype.cleanText = function () {
                                this.normalizeWhitespaces();
                                this.removeComments();
                                this.removeDuplicatedWords();
                            };
                            /*private*/ BaseNotConflictSample.prototype.removeDuplicatedWords = function () {
                                this.text = this.text + "removeDuplicatedWords";
                            };
                            /*private*/ BaseNotConflictSample.prototype.removeComments = function () {
                                this.text = this.text + "removeComments";
                            };
                            /*private*/ BaseNotConflictSample.prototype.normalizeWhitespaces = function () {
                                this.text = this.text + "normalizeWhitespaces";
                            };
                            return BaseNotConflictSample;
                        }());
                        ioa.BaseNotConflictSample = BaseNotConflictSample;
                        BaseNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.BaseNotConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.BaseNotConflictSample.main();
