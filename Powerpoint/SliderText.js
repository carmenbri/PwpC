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
    /// <reference path="./typings/tsd.d.ts" />
    var SlideText;
    (function (SlideText_1) {
        var SlideText = (function (_super) {
            __extends(SlideText, _super);
            function SlideText() {
                _super.apply(this, arguments);
                this.state = {
                    text: 'Click to add text'
                };
            }
            SlideText.prototype.render = function () {
                var _this = this;
                return (React.createElement("div", null, React.createElement("textarea", {"value": this.state.text, "onClick": function (e) { return _this.setState({ text: "" }); }, "onChange": function (e) { return _this.setState({ text: e.target.value }); }})));
            };
            return SlideText;
        })(React.Component);
        SlideText_1.SlideText = SlideText;
    })(SlideText || (SlideText = {}));
    ReactDOM.render(React.createElement(SlideText.SlideText, null), document.getElementById('app'));
    return SlideText;
});
//# sourceMappingURL=SliderText.js.map