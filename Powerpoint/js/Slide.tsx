﻿/// <reference path="../typings/tsd.d.ts" />

import SlideTitle from 'SlideTitle';
import SlideImg from 'SlideImg';
import SlideText from 'SlideText';
import Button from 'Button';
import SlideOptionEnum from 'slideOptionEnum'

import SlideOption = SlideOptionEnum.SlideOption;

module Slide {
    export interface ISlideProps {
        key: string;
        id: string;
        slideType: number;
        onSelectHandler: (id: string) => void;
    }
    export interface ISlideState {
      
    }
    export class Slide<P extends ISlideProps, S extends ISlideState> extends React.Component<ISlideProps, ISlideState> {

        public render(): JSX.Element {
            return this.renderSlide();
        }

        private selectSlide() {
            this.props.onSelectHandler(this.props.id);
        }

        private renderSlide(): JSX.Element {
            switch (this.props.slideType) {
                case SlideOption.SlideTitle:
                    return (
                        <div className="slide" onClick={this.selectSlide.bind(this)}>
                           <div className="centeredTitle"></div>
                        </div>
                    );
                case SlideOption.TitleText:
                    return (
                        <div className="slide" onClick={this.selectSlide.bind(this)}>
                           <div className="title"></div>
                           <div className="text"></div>
                        </div>
                    );
                case SlideOption.TitleImg:
                    return (
                        <div className="slide" onClick={this.selectSlide.bind(this)}>
                           <div className="title"></div>
                           <div className="img"></div>
                         </div>
                    );
                default:
                    throw ("Incorrect slide type");
            }
        }
    }
}

export default Slide;

