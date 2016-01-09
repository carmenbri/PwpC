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
        define(["require", "exports", './Button', './Slide', './slideOptionEnum', './utils'], factory);
    }
})(function (require, exports) {
    var Button_1 = require('./Button');
    var Slide_1 = require('./Slide');
    var slideOptionEnum_1 = require('./slideOptionEnum');
    var SlideOption = slideOptionEnum_1.default.SlideOption;
    var utils_1 = require('./utils');
    var App;
    (function (App_1) {
        var App = (function (_super) {
            __extends(App, _super);
            function App() {
                _super.apply(this, arguments);
                this.state = {
                    slideList: []
                };
            }
            App.prototype.addSlide = function () {
                this.setState({
                    slideList: this.state.slideList.concat({
                        id: utils_1.default.Utils.uuid(),
                        slydeType: 1
                    }) });
            };
            App.prototype.render = function () {
                var slideItems = this.state.slideList.map(function (s) {
                    return (React.createElement(Slide_1.default.Slide, {"key": s.id, "currentSlideType": SlideOption.SlideTitle}));
                }, this);
                return (React.createElement("div", null, React.createElement(Button_1.default.Button, {"name": "Click to add centered title", "onClickHandler": this.addSlide.bind(this)}), React.createElement(Button_1.default.Button, {"name": "Click to add title and image", "onClickHandler": this.addSlide.bind(this)}), React.createElement(Button_1.default.Button, {"name": "Click to add title and text", "onClickHandler": this.addSlide.bind(this)}), slideItems));
            };
            return App;
        })(React.Component);
        App_1.App = App;
    })(App || (App = {}));
    ReactDOM.render(React.createElement(App.App, null), document.getElementById('app'));
});
//# sourceMappingURL=App.js.map