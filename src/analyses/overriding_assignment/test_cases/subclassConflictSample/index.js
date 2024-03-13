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
                        var SubclassConflictSample = /** @class */ (function () {
                            function SubclassConflictSample() {
                            }
                            SubclassConflictSample.main = function (args) {
                                var x = new br.unb.cic.analysis.samples.ioa.A();
                                var y = 0;
                                x.m();
                            };
                            return SubclassConflictSample;
                        }());
                        ioa.SubclassConflictSample = SubclassConflictSample;
                        SubclassConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.SubclassConflictSample";
                        var A = /** @class */ (function () {
                            function A() {
                                if (this.x === undefined) {
                                    this.x = 0;
                                }
                                this.x = 0;
                            }
                            A.prototype.m = function () {
                                this.x = 1;
                            };
                            return A;
                        }());
                        ioa.A = A;
                        A["__class"] = "br.unb.cic.analysis.samples.ioa.A";
                        var B = /** @class */ (function (_super) {
                            __extends(B, _super);
                            function B() {
                                return _super.call(this) || this;
                            }
                            B.prototype.m = function () {
                                this.x = 2;
                            };
                            return B;
                        }(br.unb.cic.analysis.samples.ioa.A));
                        ioa.B = B;
                        B["__class"] = "br.unb.cic.analysis.samples.ioa.B";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.SubclassConflictSample.main(null);
