/// <reference path="./typings/tsd.d.ts" />

import SlideTitle from 'SlideTitle';
import SlideImg from 'SlideImg';
import SlideText from 'SlideText';
import Button from 'Button';
import ButtonDelete from 'ButtonDelete';
import SlideOptionEnum from 'slideOptionEnum'

import SlideOption = SlideOptionEnum.SlideOption;

module Slide {
    export interface ISlideProps {
        key: string;
        currentSlideType: number;
    }
    export interface ISlideState {
      
    }
    export class Slide<P extends ISlideProps, S extends ISlideState> extends React.Component<ISlideProps, ISlideState> {

        public render(): JSX.Element {
            return this.renderSlide();
        }
        private renderSlide(): JSX.Element {
            switch (this.props.currentSlideType) {
                case SlideOption.SlideTitle:
                    return (
                        <div>
                        <SlideTitle.SlideTitle />
                        <ButtonDelete.ButtonDelete />
                            </div>
                    );
                case SlideOption.TitleImg:
                    return (
                        <div>
                            <SlideTitle.SlideTitle />
                            <SlideImg.SlideImg />
                            </div>
                    );
                case SlideOption.TitleText:
                    return (
                        <div>
                            <SlideTitle.SlideTitle />
                            <SlideText.SlideText />
                            </div>
                    );
                default:
                    throw ("Incorrect slide type");
            }
        }
    }
}

export default Slide;

