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
        public addSlide() {
            this.setState({
                slideList: this.state.slideList.concat({
                    id: Utils.Utils.uuid(),
                    slydeType: 1
                }) });
        }

        public render(): JSX.Element {
            var slideItems = this.state.slideList.map(function (s) {
                return (
                    <Slide.Slide key={s.id} currentSlideType={SlideOption.SlideTitle}/>
                );
            }, this);
            return (
                <div>
                  <Button.Button name="Click to add centered title" onClickHandler={this.addSlide.bind(this) } />
                  <Button.Button name="Click to add title and image" onClickHandler={this.addSlide.bind(this) } />
                  <Button.Button name="Click to add title and text" onClickHandler={this.addSlide.bind(this)} />
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



