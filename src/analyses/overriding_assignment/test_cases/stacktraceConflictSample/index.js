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
                        var StacktraceConflictSample = /** @class */ (function () {
                            function StacktraceConflictSample() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                                if (this.y === undefined) {
                                    this.y = 0;
                                }
                            }
                            StacktraceConflictSample.main = function () {
                                var m = new StacktraceConflictSample();
                                m.foo();
                                m.bar();
                            };
                            /*private*/ StacktraceConflictSample.prototype.foo = function () {
                                this.qux();
                                console.info();
                                this.y = 1;
                            };
                            /*private*/ StacktraceConflictSample.prototype.bar = function () {
                                this.x = 2;
                                this.y = 2;
                            };
                            /*private*/ StacktraceConflictSample.prototype.qux = function () {
                                this.x = 3;
                                console.info();
                            };
                            return StacktraceConflictSample;
                        }());
                        ioa.StacktraceConflictSample = StacktraceConflictSample;
                        StacktraceConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.StacktraceConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.StacktraceConflictSample.main();
