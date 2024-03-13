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
                        var CallGraphSample = /** @class */ (function () {
                            function CallGraphSample() {
                            }
                            CallGraphSample.main = function (args) {
                                var callGraphInterface = new br.unb.cic.analysis.samples.ioa.CallGraphClassImplements();
                                callGraphInterface.baz();
                                var callGraphClassImplements = new br.unb.cic.analysis.samples.ioa.CallGraphClassImplements();
                                callGraphClassImplements.baz();
                                var callGraphClass = new br.unb.cic.analysis.samples.ioa.CallGraphClass();
                                callGraphClass.bar();
                            };
                            CallGraphSample.arr = null;
                            return CallGraphSample;
                        }());
                        ioa.CallGraphSample = CallGraphSample;
                        CallGraphSample["__class"] = "br.unb.cic.analysis.samples.ioa.CallGraphSample";
                        var CallGraphClass = /** @class */ (function () {
                            function CallGraphClass() {
                                if (this.__bar === undefined) {
                                    this.__bar = 0;
                                }
                            }
                            CallGraphClass.prototype.bar = function () {
                                this.__bar = 2;
                            };
                            return CallGraphClass;
                        }());
                        ioa.CallGraphClass = CallGraphClass;
                        CallGraphClass["__class"] = "br.unb.cic.analysis.samples.ioa.CallGraphClass";
                        var CallGraphClassImplements = /** @class */ (function () {
                            function CallGraphClassImplements() {
                                if (this.__baz === undefined) {
                                    this.__baz = 0;
                                }
                                this.__baz = 1;
                            }
                            /**
                             *
                             */
                            CallGraphClassImplements.prototype.baz = function () {
                                this.__baz = 3;
                            };
                            return CallGraphClassImplements;
                        }());
                        ioa.CallGraphClassImplements = CallGraphClassImplements;
                        CallGraphClassImplements["__class"] = "br.unb.cic.analysis.samples.ioa.CallGraphClassImplements";
                        CallGraphClassImplements["__interfaces"] = ["br.unb.cic.analysis.samples.ioa.CallGraphInterface"];
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.CallGraphSample.main(null);
