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
    var Button;
    (function (Button_1) {
        var Button = (function (_super) {
            __extends(Button, _super);
            function Button() {
                _super.apply(this, arguments);
            }
            Button.prototype.render = function () {
                return (React.createElement("div", null, React.createElement("button", {"onClick": this.props.onClickHandler}, this.props.name)));
            };
            return Button;
        })(React.Component);
        Button_1.Button = Button;
    })(Button || (Button = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = Button;
});
//# sourceMappingURL=Button.js.map