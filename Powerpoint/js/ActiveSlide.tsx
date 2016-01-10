/// <reference path="../typings/tsd.d.ts" />

import SlideTitle from 'SlideTitle';
import SlideImg from 'SlideImg';
import SlideText from 'SlideText';
import Button from 'Button';
import SlideOptionEnum from 'slideOptionEnum'
import SlideOption = SlideOptionEnum.SlideOption;

module ActiveSlide {
    export interface IActiveSlideProps {
        slideObj: ISlide;
        onTitleKeyUpHandler: (title: string) => void;
    }
    export interface IActiveSlideState {

    }
    export class ActiveSlide<P extends IActiveSlideProps, S extends IActiveSlideState> extends React.Component<IActiveSlideProps, IActiveSlideState> {

        public render(): JSX.Element {
            return this.renderSlide();
        }

        private renderSlide(): JSX.Element {
            switch (this.props.slideObj.slideType) {
                case SlideOption.SlideTitle:
                    return (
                        <div>
                           <SlideTitle.SlideTitle key={this.props.slideObj.id} initialTitle={this.props.slideObj.title} onTitleKeyUpHandler={this.props.onTitleKeyUpHandler.bind(this)}/>
                        </div>
                    );
                case SlideOption.TitleText:
                    return (
                        <div>
                            <SlideTitle.SlideTitle key={this.props.slideObj.id} initialTitle={this.props.slideObj.title} onTitleKeyUpHandler={this.props.onTitleKeyUpHandler.bind(this) }/>
                            <SlideText.SlideText key={this.props.slideObj.id} initialTitle={this.props.slideObj.title} onTitleKeyUpHandler={this.props.onTitleKeyUpHandler.bind(this) }/>
                        </div>
                    );
                case SlideOption.TitleImg:
                    return (
                        <div>
                            <SlideTitle.SlideTitle key={this.props.slideObj.id} initialTitle={this.props.slideObj.title} onTitleKeyUpHandler={this.props.onTitleKeyUpHandler.bind(this) }/>
                            <SlideImg.SlideImg key={this.props.slideObj.id} initialTitle={this.props.slideObj.title} onTitleKeyUpHandler={this.props.onTitleKeyUpHandler.bind(this) }/>
                        </div>
                    );
                default:
                    throw ("Incorrect slide type");
            }
        }
    }
}

export default ActiveSlide;

