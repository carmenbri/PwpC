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
        define(["require", "exports", './SlideTitle'], factory);
    }
})(function (require, exports) {
    /// <reference path="./typings/tsd.d.ts" />
    var SlideTitle_1 = require('./SlideTitle');
    var SlideText;
    (function (SlideText_1) {
        var SlideText = (function (_super) {
            __extends(SlideText, _super);
            function SlideText() {
                _super.apply(this, arguments);
                this.state = {
                    value: "Click to add text",
                    text: ""
                };
            }
            SlideText.prototype.render = function () {
                var _this = this;
                return (React.createElement("div", null, React.createElement("textarea", {"onChange": function (e) { return _this.setState({
                    value: e.target.value,
                    text: _this.state.text
                }); }, "defaultValue": this.state.value})));
            };
            return SlideText;
        })(SlideTitle_1.default.SlideTitle);
        SlideText_1.SlideText = SlideText;
    })(SlideText || (SlideText = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SlideText;
});
//# sourceMappingURL=SlideText.js.map