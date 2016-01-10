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
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var SlideText;
    (function (SlideText_1) {
        var SlideText = (function (_super) {
            __extends(SlideText, _super);
            function SlideText() {
                _super.apply(this, arguments);
            }
            SlideText.prototype.render = function () {
                var _this = this;
                return (React.createElement("div", null, React.createElement("textarea", {"placeholder": "Click to add text", "onKeyUp": function (e) {
                    var textareaText = e.target.value;
                    _this.props.onTextKeyUpHandler(textareaText);
                }}, this.props.text)));
            };
            return SlideText;
        })(React.Component);
        SlideText_1.SlideText = SlideText;
    })(SlideText || (SlideText = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SlideText;
});
//# sourceMappingURL=SlideText.js.map