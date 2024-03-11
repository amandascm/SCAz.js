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
                        var AbstractClass = /** @class */ (function () {
                            function AbstractClass() {
                            }
                            AbstractClass.accept = null;
                            return AbstractClass;
                        }());
                        ioa.AbstractClass = AbstractClass;
                        AbstractClass["__class"] = "br.unb.cic.analysis.samples.ioa.AbstractClass";
                        (function (AbstractClass) {
                            var InnerClass1 = /** @class */ (function () {
                                function InnerClass1() {
                                    if (this.next === undefined) {
                                        this.next = null;
                                    }
                                    if ("A".length > 0) {
                                        this.next = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass1();
                                    }
                                    else if ("B".length > 0) {
                                        this.next = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass2();
                                    }
                                    else if ("C".length > 0) {
                                        this.next = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass3(br.unb.cic.analysis.samples.ioa.AbstractClass.accept);
                                    }
                                    else if ("D".length > 0) {
                                        this.next = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass4();
                                    }
                                    else if ("E".length > 0) {
                                        this.next = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass5();
                                    }
                                    else if ("F".length > 0) {
                                        this.next = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass6();
                                    }
                                    else if ("G".length > 0) {
                                        this.next = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass7();
                                    }
                                    else if ("H".length > 0) {
                                        this.next = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass8();
                                    }
                                }
                                InnerClass1.prototype.match = function () {
                                    this.next.match();
                                };
                                return InnerClass1;
                            }());
                            AbstractClass.InnerClass1 = InnerClass1;
                            InnerClass1["__class"] = "br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass1";
                            var InnerClass2 = /** @class */ (function (_super) {
                                __extends(InnerClass2, _super);
                                function InnerClass2() {
                                    return _super.call(this) || this;
                                }
                                InnerClass2.prototype.match = function () {
                                    this.next.match();
                                };
                                return InnerClass2;
                            }(AbstractClass.InnerClass1));
                            AbstractClass.InnerClass2 = InnerClass2;
                            InnerClass2["__class"] = "br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass2";
                            var InnerClass3 = /** @class */ (function (_super) {
                                __extends(InnerClass3, _super);
                                function InnerClass3(next) {
                                    var _this = _super.call(this) || this;
                                    _this.next = next;
                                    return _this;
                                }
                                InnerClass3.prototype.match = function () {
                                    this.next.match();
                                };
                                return InnerClass3;
                            }(AbstractClass.InnerClass1));
                            AbstractClass.InnerClass3 = InnerClass3;
                            InnerClass3["__class"] = "br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass3";
                            var InnerClass4 = /** @class */ (function (_super) {
                                __extends(InnerClass4, _super);
                                function InnerClass4() {
                                    return _super.call(this) || this;
                                }
                                InnerClass4.prototype.match = function () {
                                    this.next.match();
                                };
                                return InnerClass4;
                            }(AbstractClass.InnerClass1));
                            AbstractClass.InnerClass4 = InnerClass4;
                            InnerClass4["__class"] = "br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass4";
                            var InnerClass5 = /** @class */ (function (_super) {
                                __extends(InnerClass5, _super);
                                function InnerClass5() {
                                    return _super.call(this) || this;
                                }
                                InnerClass5.prototype.match = function () {
                                    this.next.match();
                                };
                                return InnerClass5;
                            }(AbstractClass.InnerClass1));
                            AbstractClass.InnerClass5 = InnerClass5;
                            InnerClass5["__class"] = "br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass5";
                            var InnerClass6 = /** @class */ (function (_super) {
                                __extends(InnerClass6, _super);
                                function InnerClass6() {
                                    return _super.call(this) || this;
                                }
                                InnerClass6.prototype.match = function () {
                                    this.next.match();
                                };
                                return InnerClass6;
                            }(AbstractClass.InnerClass1));
                            AbstractClass.InnerClass6 = InnerClass6;
                            InnerClass6["__class"] = "br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass6";
                            var InnerClass7 = /** @class */ (function (_super) {
                                __extends(InnerClass7, _super);
                                function InnerClass7() {
                                    return _super.call(this) || this;
                                }
                                InnerClass7.prototype.match = function () {
                                    this.next.match();
                                };
                                return InnerClass7;
                            }(AbstractClass.InnerClass1));
                            AbstractClass.InnerClass7 = InnerClass7;
                            InnerClass7["__class"] = "br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass7";
                            var InnerClass8 = /** @class */ (function (_super) {
                                __extends(InnerClass8, _super);
                                function InnerClass8() {
                                    return _super.call(this) || this;
                                }
                                InnerClass8.prototype.match = function () {
                                    this.next.match();
                                };
                                return InnerClass8;
                            }(AbstractClass.InnerClass2));
                            AbstractClass.InnerClass8 = InnerClass8;
                            InnerClass8["__class"] = "br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass8";
                        })(AbstractClass = ioa.AbstractClass || (ioa.AbstractClass = {}));
                        var InnerClassRecursiveNotConflictSample = /** @class */ (function () {
                            function InnerClassRecursiveNotConflictSample() {
                            }
                            InnerClassRecursiveNotConflictSample.main = function (args) {
                                var abstractClass;
                                if (args && args[0] === "A") {
                                    abstractClass = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass1();
                                }
                                else if (args && args[0] === "B") {
                                    abstractClass = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass2();
                                }
                                else if (args && args[0] === "C") {
                                    abstractClass = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass3(new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass1());
                                }
                                else if (args && args[0] === "D") {
                                    abstractClass = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass4();
                                }
                                else if (args && args[0] === "E") {
                                    abstractClass = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass5();
                                }
                                else if (args && args[0] === "F") {
                                    abstractClass = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass6();
                                }
                                else if (args && args[0] === "G") {
                                    abstractClass = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass7();
                                }
                                else {
                                    abstractClass = new br.unb.cic.analysis.samples.ioa.AbstractClass.InnerClass8();
                                }
                                console.log(abstractClass)
                                abstractClass.match();
                            };
                            return InnerClassRecursiveNotConflictSample;
                        }());
                        ioa.InnerClassRecursiveNotConflictSample = InnerClassRecursiveNotConflictSample;
                        InnerClassRecursiveNotConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.InnerClassRecursiveNotConflictSample";
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.InnerClassRecursiveNotConflictSample.main(null);
