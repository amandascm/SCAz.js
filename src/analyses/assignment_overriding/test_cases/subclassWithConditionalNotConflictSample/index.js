var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
                        var SubclassWithConditionalNotConflictSample = /** @class */ (function () {
                            function SubclassWithConditionalNotConflictSample() {
                            }
                            SubclassWithConditionalNotConflictSample.main = function (args) {
                                var y = 1;
                                SubclassWithConditionalNotConflictSample.m(true);
                            };
                            SubclassWithConditionalNotConflictSample.m = function (b) {
                                if (b) {
                                    SubclassWithConditionalNotConflictSample.c = new br.unb.cic.analysis.samples.ioa.C();
                                }
                                else {
                                    SubclassWithConditionalNotConflictSample.c = new br.unb.cic.analysis.samples.ioa.D();
                                }
                                SubclassWithConditionalNotConflictSample.c.m();
                            };
                            SubclassWithConditionalNotConflictSample.c = null;
                            return SubclassWithConditionalNotConflictSample;
                        }());
                        ioa.SubclassWithConditionalNotConflictSample = SubclassWithConditionalNotConflictSample;
                        SubclassWithConditionalNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.SubclassWithConditionalNotConflictSample";
                        var C = /** @class */ (function () {
                            function C() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                                this.x = 0;
                            }
                            C.prototype.m = function () {
                                this.foo();
                            };
                            C.prototype.foo = function () {
                                this.x = 1;
                            };
                            return C;
                        }());
                        ioa.C = C;
                        C["__class"] = "br.unb.cic.analysis.samples.ioa.C";
                        var D = /** @class */ (function (_super) {
                            __extends(D, _super);
                            function D() {
                                return _super.call(this) || this;
                            }
                            D.prototype.m = function () {
                                this.x = 2;
                            };
                            return D;
                        }(br.unb.cic.analysis.samples.ioa.C));
                        ioa.D = D;
                        D["__class"] = "br.unb.cic.analysis.samples.ioa.D";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.SubclassWithConditionalNotConflictSample.main(null);
