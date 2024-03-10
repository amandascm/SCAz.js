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
                        var IfWithInvokeConflictSample = /** @class */ (function () {
                            function IfWithInvokeConflictSample() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                                if (this.y === undefined) {
                                    this.y = 0;
                                }
                            }
                            IfWithInvokeConflictSample.main = function (args) {
                                var m = new IfWithInvokeConflictSample();
                                m.x = 0;
                                m.y = 0;
                                if (m.foo()) {
                                    m.y = 1;
                                }
                            };
                            /*private*/ IfWithInvokeConflictSample.prototype.foo = function () {
                                this.x = 1;
                                return true;
                            };
                            return IfWithInvokeConflictSample;
                        }());
                        ioa.IfWithInvokeConflictSample = IfWithInvokeConflictSample;
                        IfWithInvokeConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.IfWithInvokeConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.IfWithInvokeConflictSample.main(null);
