/// <reference path="../typings/tsd.d.ts" />

import SlideTitle from 'SlideTitle';
import SlideImg from 'SlideImg';
import SlideText from 'SlideText';
import Button from 'Button';
import SlideOptionEnum from 'slideOptionEnum'
import SlideOption = SlideOptionEnum.SlideOption;

module ActiveSlide {
    export interface IActiveSlideProps {
        id: string;
        slideType: number;
    }
    export interface IActiveSlideState {

    }
    export class ActiveSlide<P extends IActiveSlideProps, S extends IActiveSlideState> extends React.Component<IActiveSlideProps, IActiveSlideState> {

        public render(): JSX.Element {
            return this.renderSlide();
        }

        private renderSlide(): JSX.Element {
            switch (this.props.slideType) {
                case SlideOption.SlideTitle:
                    return (
                        <div>
                           <SlideTitle.SlideTitle />
                        </div>
                    );
                case SlideOption.TitleText:
                    return (
                        <div>
                            <SlideTitle.SlideTitle />
                            <SlideText.SlideText />
                        </div>
                    );
                case SlideOption.TitleImg:
                    return (
                        <div>
                            <SlideTitle.SlideTitle />
                            <SlideImg.SlideImg />
                        </div>
                    );
                default:
                    throw ("Incorrect slide type");
            }
        }
    }
}

export default ActiveSlide;

