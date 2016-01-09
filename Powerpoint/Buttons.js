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
        define(["require", "exports", './Button', './slideOptionEnum'], factory);
    }
})(function (require, exports) {
    var Button_1 = require('./Button');
    var slideOptionEnum_1 = require('./slideOptionEnum');
    var SlideOption = slideOptionEnum_1.default.SlideOption;
    var Buttons;
    (function (Buttons_1) {
        var Buttons = (function (_super) {
            __extends(Buttons, _super);
            function Buttons() {
                _super.apply(this, arguments);
            }
            Buttons.prototype.firstSlideType = function () {
                this.props.onTypeChange(SlideOption.SlideTitle);
            };
            Buttons.prototype.secondSlideType = function () {
                this.props.onTypeChange(SlideOption.TitleImg);
            };
            Buttons.prototype.thirdSlideType = function () {
                this.props.onTypeChange(SlideOption.TitleText);
            };
            Buttons.prototype.render = function () {
                return (React.createElement("div", null, React.createElement(Button_1.default.Button, {"name": "Click to add centered title", "onClickHandler": this.firstSlideType.bind(this)}), React.createElement(Button_1.default.Button, {"name": "Click to add title and image", "onClickHandler": this.secondSlideType.bind(this)}), React.createElement(Button_1.default.Button, {"name": "Click to add title and text", "onClickHandler": this.thirdSlideType.bind(this)})));
            };
            return Buttons;
        })(React.Component);
        Buttons_1.Buttons = Buttons;
    })(Buttons || (Buttons = {}));
    37;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Buttons;
});
//# sourceMappingURL=Buttons.js.map