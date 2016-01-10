﻿/// <reference path="../typings/tsd.d.ts" />

import Button from 'Button';
import Slide from 'Slide';
import ActiveSlide from 'ActiveSlide';
import SlideOptionEnum from 'slideOptionEnum'
import SlideOption = SlideOptionEnum.SlideOption;
import Utils from 'utils';

module App {
    interface AppProps {

    }
    interface AppState {
        slideList: Array<ISlide>;
        activeSlide: ISlide;
    }

    export class App extends React.Component<{}, AppState> {
        constructor(state: AppState) {
            super(state);
           
            var localStorageList = Utils.Utils.store("PowerPointLS");

            if (!localStorageList.length)
            {
                localStorageList=localStorageList.concat({
                    id: Utils.Utils.uuid(),
                    slideType: SlideOption.SlideTitle
                })
            }

            this.state = {
                slideList: localStorageList,
                activeSlide: localStorageList[localStorageList.length - 1]
            };
        }

        public addSlide(slideType: SlideOption) {
            var modifiedList = this.state.slideList.concat({
                id: Utils.Utils.uuid(),
                slideType: slideType
            });
            this.setState({
                slideList: modifiedList,
                activeSlide: modifiedList[modifiedList.length-1]
            });
            Utils.Utils.store("PowerPointLS", modifiedList);
        }
        public addTitleSlide() {
            this.addSlide(SlideOption.SlideTitle);
        }
        public addTextSlide() {
            this.addSlide(SlideOption.TitleText);
        }
        public addImgSlide() {
            this.addSlide(SlideOption.TitleImg);
        }
        public deleteSlide() {
            var activeId = this.state.activeSlide.id;
            var modifiedList = this.state.slideList.filter(function (obj) {
                return obj.id !== activeId;
            });
            this.setState({
                slideList: modifiedList,
                activeSlide: modifiedList[0]
            });
        }
        public selectSlide(id: string) {
            var allSlide = this.state.slideList;
            var selectedSlide = this.state.slideList.filter(function (obj) {
                return obj.id == id;
            })[0];

            this.setState({
                slideList: allSlide,
                activeSlide: selectedSlide
            });
        }

        public render(): JSX.Element {
            var slideItems = this.state.slideList.map(function (s) {
                return (
                    <Slide.Slide key={s.id} id={s.id} slideType={s.slideType} onSelectHandler={this.selectSlide.bind(this) }/>
                );
            }, this);
            return (
                <div className="appFrame">
                    <div className="menu">
                      <Button.Button name="Add centered title" onClickHandler={this.addTitleSlide.bind(this) } />
                      <Button.Button name="Add title and text" onClickHandler={this.addTextSlide.bind(this) } />
                      <Button.Button name="Add title and image" onClickHandler={this.addImgSlide.bind(this) } />
                      <Button.Button name="Delete" onClickHandler={this.deleteSlide.bind(this) }/>
                    </div>
                    <div className="leftSlides">
                      {slideItems}
                    </div>
                    <div className="activeSlide">
                      <ActiveSlide.ActiveSlide id={this.state.activeSlide.id} slideType={this.state.activeSlide.slideType}/>
                    </div>
                </div>
            );
        }
    }
}

ReactDOM.render(
    <App.App/>,
    document.getElementById('app')
);



