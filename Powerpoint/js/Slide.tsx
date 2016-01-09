/// <reference path="../typings/tsd.d.ts" />

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
        id: string;
        currentSlideType: number;
        onDeleteHandler?: (id:string) => void;
    }
    export interface ISlideState {
      
    }
    export class Slide<P extends ISlideProps, S extends ISlideState> extends React.Component<ISlideProps, ISlideState> {

        public render(): JSX.Element {
            return this.renderSlide();
        }

        private deleteSlide() {
            this.props.onDeleteHandler(this.props.id);
        }

        private renderSlide(): JSX.Element {
            switch (this.props.currentSlideType) {
                case SlideOption.SlideTitle:
                    return (
                        <div>
                           <SlideTitle.SlideTitle />
                           <ButtonDelete.ButtonDelete onClickHandler={this.deleteSlide.bind(this)} name="Delete" />
                        </div>
                    );
                case SlideOption.TitleText:
                    return (
                        <div>
                            <SlideTitle.SlideTitle />
                            <SlideText.SlideText />
                            <ButtonDelete.ButtonDelete onClickHandler={this.deleteSlide.bind(this)} name="Delete"/>
                        </div>
                    );
                case SlideOption.TitleImg:
                    return (
                        <div>
                            <SlideTitle.SlideTitle />
                            <SlideImg.SlideImg />
                            <ButtonDelete.ButtonDelete onClickHandler={this.deleteSlide.bind(this) } name="Delete"/>
                            </div>
                    );
                default:
                    throw ("Incorrect slide type");
            }
        }
    }
}

export default Slide;

