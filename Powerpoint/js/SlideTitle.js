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
    var SlideTitle;
    (function (SlideTitle_1) {
        var SlideTitle = (function (_super) {
            __extends(SlideTitle, _super);
            function SlideTitle() {
                _super.apply(this, arguments);
                this.state = {
                    text: this.props.initialTitle
                };
            }
            SlideTitle.prototype.render = function () {
                var _this = this;
                return (React.createElement("div", null, React.createElement("input", {"defaultValue": this.state.text, "onClick": function (e) { if (e.target.value == 'Click to add title')
                    _this.setState({ text: "" }); }, "onKeyUp": function (e) {
                    var inputText = e.target.value;
                    _this.setState({ text: inputText });
                    _this.props.onTitleKeyUpHandler(inputText);
                }})));
            };
            return SlideTitle;
        })(React.Component);
        SlideTitle_1.SlideTitle = SlideTitle;
    })(SlideTitle || (SlideTitle = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SlideTitle;
});
//# sourceMappingURL=SlideTitle.js.map