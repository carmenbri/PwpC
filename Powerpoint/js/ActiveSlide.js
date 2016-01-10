/// <reference path="../typings/tsd.d.ts" />
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
        define(["require", "exports", 'SlideTitle', 'SlideImg', 'SlideText', 'slideOptionEnum'], factory);
    }
})(function (require, exports) {
    var SlideTitle_1 = require('SlideTitle');
    var SlideImg_1 = require('SlideImg');
    var SlideText_1 = require('SlideText');
    var slideOptionEnum_1 = require('slideOptionEnum');
    var SlideOption = slideOptionEnum_1.default.SlideOption;
    var ActiveSlide;
    (function (ActiveSlide_1) {
        var ActiveSlide = (function (_super) {
            __extends(ActiveSlide, _super);
            function ActiveSlide() {
                _super.apply(this, arguments);
            }
            ActiveSlide.prototype.render = function () {
                return this.renderSlide();
            };
            ActiveSlide.prototype.renderSlide = function () {
                switch (this.props.slideObj.slideType) {
                    case SlideOption.SlideTitle:
                        return (React.createElement("div", null, React.createElement(SlideTitle_1.default.SlideTitle, {"title": this.props.slideObj.title, "key": this.props.slideObj.id, "onTitleKeyUpHandler": this.props.onTitleKeyUpHandler.bind(this)})));
                    case SlideOption.TitleText:
                        return (React.createElement("div", null, React.createElement(SlideTitle_1.default.SlideTitle, {"title": this.props.slideObj.title, "key": this.props.slideObj.id, "onTitleKeyUpHandler": this.props.onTitleKeyUpHandler.bind(this)}), React.createElement(SlideText_1.default.SlideText, {"text": this.props.slideObj.text, "onTextKeyUpHandler": this.props.onTextKeyUpHandler.bind(this)})));
                    case SlideOption.TitleImg:
                        return (React.createElement("div", null, React.createElement(SlideTitle_1.default.SlideTitle, {"title": this.props.slideObj.title, "key": this.props.slideObj.id, "onTitleKeyUpHandler": this.props.onTitleKeyUpHandler.bind(this)}), React.createElement(SlideImg_1.default.SlideImg, {"image": this.props.slideObj.image, "onImageUpload": this.props.onImageUpload.bind(this)})));
                    default:
                        throw ("Incorrect slide type");
                }
            };
            return ActiveSlide;
        })(React.Component);
        ActiveSlide_1.ActiveSlide = ActiveSlide;
    })(ActiveSlide || (ActiveSlide = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ActiveSlide;
});
//# sourceMappingURL=ActiveSlide.js.map