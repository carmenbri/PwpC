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
        define(["require", "exports", 'Button', 'Slide', 'ActiveSlide', 'slideOptionEnum', 'utils'], factory);
    }
})(function (require, exports) {
    var Button_1 = require('Button');
    var Slide_1 = require('Slide');
    var ActiveSlide_1 = require('ActiveSlide');
    var slideOptionEnum_1 = require('slideOptionEnum');
    var SlideOption = slideOptionEnum_1.default.SlideOption;
    var utils_1 = require('utils');
    var App;
    (function (App_1) {
        var App = (function (_super) {
            __extends(App, _super);
            function App(state) {
                _super.call(this, state);
                var localStorageList = utils_1.default.Utils.store("PowerPointLS");
                if (!localStorageList.length) {
                    localStorageList = localStorageList.concat({
                        id: utils_1.default.Utils.uuid(),
                        slideType: SlideOption.SlideTitle,
                        title: 'Click to add title'
                    });
                }
                this.state = {
                    slideList: localStorageList,
                    activeSlide: localStorageList[localStorageList.length - 1]
                };
            }
            App.prototype.addSlide = function (slideType) {
                var modifiedList = this.state.slideList.concat({
                    id: utils_1.default.Utils.uuid(),
                    slideType: slideType,
                    title: 'Click to add title'
                });
                this.setState({
                    slideList: modifiedList,
                    activeSlide: modifiedList[modifiedList.length - 1]
                });
                utils_1.default.Utils.store("PowerPointLS", modifiedList);
            };
            App.prototype.addTitleSlide = function () {
                this.addSlide(SlideOption.SlideTitle);
            };
            App.prototype.addTextSlide = function () {
                this.addSlide(SlideOption.TitleText);
            };
            App.prototype.addImgSlide = function () {
                this.addSlide(SlideOption.TitleImg);
            };
            App.prototype.deleteSlide = function () {
                var activeId = this.state.activeSlide.id;
                var modifiedList = this.state.slideList.filter(function (obj) {
                    return obj.id !== activeId;
                });
                this.setState({
                    slideList: modifiedList,
                    activeSlide: modifiedList[0]
                });
                utils_1.default.Utils.store("PowerPointLS", modifiedList);
            };
            App.prototype.selectSlide = function (id) {
                console.log(id);
                var allSlide = this.state.slideList;
                var selectedSlide = this.state.slideList.filter(function (obj) {
                    return obj.id == id;
                })[0];
                this.setState({
                    slideList: allSlide,
                    activeSlide: selectedSlide
                });
            };
            App.prototype.changeTitle = function (title) {
                var activeId = this.state.activeSlide.id;
                var selectedSlide = this.state.slideList.filter(function (obj) {
                    return obj.id == activeId;
                })[0];
                selectedSlide.title = title;
                this.forceUpdate();
            };
            App.prototype.render = function () {
                console.log(this.state.activeSlide.title);
                var slideItems = this.state.slideList.map(function (s) {
                    return (React.createElement(Slide_1.default.Slide, {"key": s.id, "slideObj": s, "onSelectHandler": this.selectSlide.bind(this)}));
                }, this);
                return (React.createElement("div", {"className": "appFrame"}, React.createElement("div", {"className": "menu"}, React.createElement(Button_1.default.Button, {"name": "Add centered title", "onClickHandler": this.addTitleSlide.bind(this)}), React.createElement(Button_1.default.Button, {"name": "Add title and text", "onClickHandler": this.addTextSlide.bind(this)}), React.createElement(Button_1.default.Button, {"name": "Add title and image", "onClickHandler": this.addImgSlide.bind(this)}), React.createElement(Button_1.default.Button, {"name": "Delete", "onClickHandler": this.deleteSlide.bind(this)})), React.createElement("div", {"className": "leftSlides"}, slideItems), React.createElement("div", {"className": "activeSlide"}, React.createElement(ActiveSlide_1.default.ActiveSlide, {"slideObj": this.state.activeSlide, "onTitleKeyUpHandler": this.changeTitle.bind(this)}))));
            };
            return App;
        })(React.Component);
        App_1.App = App;
    })(App || (App = {}));
    ReactDOM.render(React.createElement(App.App, null), document.getElementById('app'));
});
//# sourceMappingURL=App.js.map