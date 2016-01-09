/// <reference path="./typings/tsd.d.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", 'SlideTitle', 'SlideImg', 'SlideText', 'ButtonDelete', 'slideOptionEnum'], factory);
    }
})(function (require, exports) {
    var SlideTitle_1 = require('SlideTitle');
    var SlideImg_1 = require('SlideImg');
    var SlideText_1 = require('SlideText');
    var ButtonDelete_1 = require('ButtonDelete');
    var slideOptionEnum_1 = require('slideOptionEnum');
    var SlideOption = slideOptionEnum_1.default.SlideOption;
    var Slide;
    (function (Slide_1) {
        var Slide = (function (_super) {
            __extends(Slide, _super);
            function Slide() {
                _super.apply(this, arguments);
            }
            Slide.prototype.render = function () {
                return this.renderSlide();
            };
            Slide.prototype.renderSlide = function () {
                switch (this.props.currentSlideType) {
                    case SlideOption.SlideTitle:
                        return (React.createElement("div", null, React.createElement(SlideTitle_1.default.SlideTitle, null), React.createElement(ButtonDelete_1.default.ButtonDelete, null)));
                    case SlideOption.TitleImg:
                        return (React.createElement("div", null, React.createElement(SlideTitle_1.default.SlideTitle, null), React.createElement(SlideImg_1.default.SlideImg, null)));
                    case SlideOption.TitleText:
                        return (React.createElement("div", null, React.createElement(SlideTitle_1.default.SlideTitle, null), React.createElement(SlideText_1.default.SlideText, null)));
                    default:
                        throw ("Incorrect slide type");
                }
            };
            return Slide;
        })(React.Component);
        Slide_1.Slide = Slide;
    })(Slide || (Slide = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Slide;
});
//# sourceMappingURL=Slide.js.map