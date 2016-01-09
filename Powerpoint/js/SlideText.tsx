/// <reference path="../typings/tsd.d.ts" />

import SlideTitle from 'SlideTitle';
module SlideText {
    export interface SlideTextProps extends SlideTitle.SlideTitleProps {
        text?: string;
    }
    interface SlideTextState extends SlideTitle.SlideTitleState {
        value: string;
    }

    export class SlideText extends SlideTitle.SlideTitle<SlideTextProps, SlideTextState> {
        state = {
            value: "Click to add text",
            text: ""
        };
        public render(): JSX.Element {
            return (
                <div>
             <textarea
                        onChange={(e) => this.setState({
                            value: (e.target as HTMLTextAreaElement).value,
                            text: (this.state as SlideTextState).text
                        } as SlideTextState) }
                     defaultValue={(this.state as SlideTextState).value} />
                    </div>
            );
        }
    }
}

export default SlideText;

