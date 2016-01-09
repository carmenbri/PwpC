/// <reference path="./typings/tsd.d.ts" />

import Button from './Button';
import Slide from './Slide';
import SlideOptionEnum from './slideOptionEnum'
import SlideOption = SlideOptionEnum.SlideOption;
import Utils from './utils';

module App {
    interface AppProps {

    }
    interface AppState {
        slideList: Array<ISlide>;
    }

    export class App extends React.Component<AppProps, AppState> {
        state = {
            slideList: []
        };
        public addSlide(slideType: SlideOption) {
            this.setState({
                slideList: this.state.slideList.concat({
                    id: Utils.Utils.uuid(),
                    slydeType: slideType
                }) });
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
        public deleteSlide(id: string) {
            this.setState({
                slideList: this.state.slideList.filter(function (obj) {
                    return obj.id !== id;
                })
            });
        }

        public render(): JSX.Element {
            var slideItems = this.state.slideList.map(function (s) {
                return (
                    <Slide.Slide key={s.id} id={s.id} currentSlideType={s.slydeType} onDeleteHandler={this.deleteSlide.bind(this)}/>
                );
            }, this);
            return (
                <div>
                  <Button.Button name="Click to add centered title" onClickHandler={this.addTitleSlide.bind(this) } />
                  <Button.Button name="Click to add title and text" onClickHandler={this.addTextSlide.bind(this) } />
                  <Button.Button name="Click to add title and image" onClickHandler={this.addImgSlide.bind(this) } />
                  {slideItems}
                </div>
            );
        }
    }
}

ReactDOM.render(
    <App.App/>,
    document.getElementById('app')
);



