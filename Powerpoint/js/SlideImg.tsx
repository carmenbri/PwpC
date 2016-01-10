/// <reference path="../typings/tsd.d.ts" />

import SlideTitle from 'SlideTitle';
module SlideImg {
    export interface SlideImgProps extends SlideTitle.SlideTitleProps {
    }
    interface SlideImgState extends SlideTitle.SlideTitleState {
        value: string;
    }

    export class SlideImg extends SlideTitle.SlideTitle<SlideImgProps, SlideImgState> {
        state = {
            value: "Click to add image",
            text: this.props.initialTitle
        };
        public render(): JSX.Element {
            return (
             <div>
             <input type="file"
                 onChange={(e) => this.setState({
                     value: (e.target as HTMLInputElement).value,
                     text: (this.state as SlideImgState).text
                 } as SlideImgState) }
                 defaultValue={(this.state as SlideImgState).value} />
                    </div>
            );
        }
    }
}

export default SlideImg;

