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
        define(["require", "exports", 'slideOptionEnum'], factory);
    }
})(function (require, exports) {
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
            Slide.prototype.selectSlide = function () {
                this.props.onSelectHandler(this.props.slideObj.id);
            };
            Slide.prototype.renderSlide = function () {
                switch (this.props.slideObj.slideType) {
                    case SlideOption.SlideTitle:
                        return (React.createElement("div", {"className": "slide", "onClick": this.selectSlide.bind(this)}, React.createElement("div", {"className": "title center"}, this.props.slideObj.title)));
                    case SlideOption.TitleText:
                        return (React.createElement("div", {"className": "slide", "onClick": this.selectSlide.bind(this)}, React.createElement("div", {"className": "title"}, this.props.slideObj.title), React.createElement("div", {"className": "text"}, this.props.slideObj.text)));
                    case SlideOption.TitleImg:
                        return (React.createElement("div", {"className": "slide", "onClick": this.selectSlide.bind(this)}, React.createElement("div", {"className": "title"}, this.props.slideObj.title), React.createElement("div", {"className": "img"}, this.props.slideObj.image)));
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