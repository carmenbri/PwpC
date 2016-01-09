(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var SlideOptionEnum;
    (function (SlideOptionEnum) {
        (function (SlideOption) {
            SlideOption[SlideOption["SlideTitle"] = 1] = "SlideTitle";
            SlideOption[SlideOption["TitleImg"] = 2] = "TitleImg";
            SlideOption[SlideOption["TitleText"] = 3] = "TitleText";
        })(SlideOptionEnum.SlideOption || (SlideOptionEnum.SlideOption = {}));
        var SlideOption = SlideOptionEnum.SlideOption;
    })(SlideOptionEnum || (SlideOptionEnum = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SlideOptionEnum;
});
//# sourceMappingURL=slideOptionEnum.js.map