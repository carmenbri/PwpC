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
    var SlideImg;
    (function (SlideImg_1) {
        var SlideImg = (function (_super) {
            __extends(SlideImg, _super);
            function SlideImg() {
                _super.apply(this, arguments);
            }
            SlideImg.prototype.render = function () {
                var _this = this;
                return (React.createElement("div", null, React.createElement("input", {"type": "file", "accept": "image/*", "defaultValue": this.props.image, "onChange": function (e) {
                    var imagePath = e.target.value;
                    _this.props.onImageUpload(imagePath);
                }})));
            };
            return SlideImg;
        })(React.Component);
        SlideImg_1.SlideImg = SlideImg;
    })(SlideImg || (SlideImg = {}));
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = SlideImg;
});
//# sourceMappingURL=SlideImg.js.map