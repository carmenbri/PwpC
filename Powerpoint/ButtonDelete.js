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
        define(["require", "exports", './Button'], factory);
    }
})(function (require, exports) {
    /// <reference path="./typings/tsd.d.ts" />
    var Button_1 = require('./Button');
    var ButtonDelete;
    (function (ButtonDelete_1) {
        var ButtonDelete = (function (_super) {
            __extends(ButtonDelete, _super);
            function ButtonDelete() {
                _super.apply(this, arguments);
            }
            ButtonDelete.prototype.render = function () {
                return (React.createElement("div", null, React.createElement(Button_1.default.Button, {"onClickHandler": this.props.onClickHandler, "name": this.props.name})));
            };
            return ButtonDelete;
        })(Button_1.default.Button);
        ButtonDelete_1.ButtonDelete = ButtonDelete;
    })(ButtonDelete || (ButtonDelete = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = ButtonDelete;
});
//# sourceMappingURL=ButtonDelete.js.map