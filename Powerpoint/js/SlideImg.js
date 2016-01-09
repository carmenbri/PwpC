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
        define(["require", "exports", 'SlideTitle'], factory);
    }
})(function (require, exports) {
    var SlideTitle_1 = require('SlideTitle');
    var SlideImg;
    (function (SlideImg_1) {
        var SlideImg = (function (_super) {
            __extends(SlideImg, _super);
            function SlideImg() {
                _super.apply(this, arguments);
                this.state = {
                    value: "Click to add image",
                    text: ""
                };
            }
            SlideImg.prototype.render = function () {
                var _this = this;
                return (React.createElement("div", null, React.createElement("input", {"type": "file", "onChange": function (e) { return _this.setState({
                    value: e.target.value,
                    text: _this.state.text
                }); }, "defaultValue": this.state.value})));
            };
            return SlideImg;
        })(SlideTitle_1.default.SlideTitle);
        SlideImg_1.SlideImg = SlideImg;
    })(SlideImg || (SlideImg = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SlideImg;
});
//# sourceMappingURL=SlideImg.js.map