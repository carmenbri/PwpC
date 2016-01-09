/// <reference path="./typings/tsd.d.ts" />

import Button from './Button';
import SlideOptionEnum from './slideOptionEnum'

import SlideOption = SlideOptionEnum.SlideOption;

module Buttons {
    export interface ButtonsProps  {
        currentSlideType: SlideOption;
        onTypeChange: (slideOption: SlideOption) => void;
    }
    export interface ButtonsState {
        slides: any;
        slide: any;
    }
    export class Buttons extends React.Component<ButtonsProps, ButtonsState> {
        public firstSlideType() {
            this.props.onTypeChange(SlideOption.SlideTitle);
        }
        public secondSlideType() {
            this.props.onTypeChange(SlideOption.TitleImg);
        }
        public thirdSlideType() {
            this.props.onTypeChange(SlideOption.TitleText);
        }
        public render(): JSX.Element {
            return (
                <div>
                  <Button.Button name="Click to add centered title" onClickHandler={this.firstSlideType.bind(this)} />
                  <Button.Button name="Click to add title and image" onClickHandler={this.secondSlideType.bind(this)} />
                  <Button.Button name="Click to add title and text" onClickHandler={this.thirdSlideType.bind(this)} />
                </div>
            );
        }
    }
}
37
export default Buttons;

