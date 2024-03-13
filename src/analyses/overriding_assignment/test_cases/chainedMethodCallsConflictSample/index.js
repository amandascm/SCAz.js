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
                        var ChainedMethodCallsConflictSample = /** @class */ (function () {
                            function ChainedMethodCallsConflictSample() {
                            }
                            ChainedMethodCallsConflictSample.main = function () {
                                var settings = ChainedMethodCallsConflictSample.Settings.settingsBuilder()
                                    .loadFromStream("json", "getClass().getResourceAsStream(json)")
                                    .put$java_lang_Object_A("path.home", "createHome()").build();
                            };
                            return ChainedMethodCallsConflictSample;
                        }());
                        ioa.ChainedMethodCallsConflictSample = ChainedMethodCallsConflictSample;
                        ChainedMethodCallsConflictSample["__class"] = "br.unb.cic.analysis.samples.ioa.ChainedMethodCallsConflictSample";
                        (function (ChainedMethodCallsConflictSample) {
                            var Settings = /** @class */ (function () {
                                function Settings(settings) {
                                    if (this.settings === undefined) {
                                        this.settings = null;
                                    }
                                    this.settings = settings;
                                }
                                Settings.settingsBuilder = function () {
                                    return new Settings.Builder();
                                };
                                return Settings;
                            }());
                            ChainedMethodCallsConflictSample.Settings = Settings;
                            Settings["__class"] = "br.unb.cic.analysis.samples.ioa.ChainedMethodCallsConflictSample.Settings";
                            (function (Settings) {
                                var Builder = /** @class */ (function () {
                                    function Builder() {
                                        this.map = ({});
                                    }
                                    Builder.prototype.loadFromStream = function (resourceName, is) {
                                        var loadedSettings = ({});
                                        /* put */ (loadedSettings[resourceName] = is);
                                        this.put$java_util_Map(loadedSettings);
                                        return this;
                                    };
                                    Builder.prototype.put$java_lang_Object_A = function () {
                                        var settings = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            settings[_i] = arguments[_i];
                                        }
                                        var loadedSettings = ({});
                                        for (var i = 0; i < settings.length; i++) {
                                            {
                                                /* put */ (loadedSettings[settings[i].toString()] = settings[i].toString());
                                            }
                                            ;
                                        }
                                        this.put$java_util_Map(loadedSettings);
                                        return this;
                                    };
                                    Builder.prototype.put = function () {
                                        var settings = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            settings[_i] = arguments[_i];
                                        }
                                        if (((settings != null && settings instanceof Array && (settings.length == 0 || settings[0] == null || (settings[0] != null))) || settings === null)) {
                                            return this.put$java_lang_Object_A.apply(this, settings);
                                        }
                                        else if (((settings != null && (settings instanceof Object)) || settings === null)) {
                                            return this.put$java_util_Map(settings);
                                        }
                                        else
                                            throw new Error('invalid overload');
                                    };
                                    Builder.prototype.put$java_util_Map = function (loadedSettings) {
                                        this.map.putAll(loadedSettings);
                                        return this;
                                    };
                                    Builder.prototype.build = function () {
                                        return new ChainedMethodCallsConflictSample.Settings(this.map);
                                    };
                                    return Builder;
                                }());
                                Settings.Builder = Builder;
                                Builder["__class"] = "br.unb.cic.analysis.samples.ioa.ChainedMethodCallsConflictSample.Settings.Builder";
                            })(Settings = ChainedMethodCallsConflictSample.Settings || (ChainedMethodCallsConflictSample.Settings = {}));
                        })(ChainedMethodCallsConflictSample = ioa.ChainedMethodCallsConflictSample || (ioa.ChainedMethodCallsConflictSample = {}));
                    })(ioa = samples.ioa || (samples.ioa = {}));
                })(samples = analysis.samples || (analysis.samples = {}));
            })(analysis = cic.analysis || (cic.analysis = {}));
        })(cic = unb.cic || (unb.cic = {}));
    })(unb = br.unb || (br.unb = {}));
})(br || (br = {}));
br.unb.cic.analysis.samples.ioa.ChainedMethodCallsConflictSample.main();
