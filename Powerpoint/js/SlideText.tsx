/// <reference path="../typings/tsd.d.ts" />

import SlideTitle from 'SlideTitle';
module SlideText {
    export interface SlideTextProps  {
        text: string;
        onTextKeyUpHandler: (text: string) => void;
    }
    export interface SlideTextState  {
    }

    export class SlideText extends React.Component<SlideTextProps, SlideTextState>{
        public render(): JSX.Element {
            return (
                <div>
                    <textarea
                        placeholder="Click to add text"
                        onKeyUp={(e) => {
                            var textareaText = (e.target as HTMLTextAreaElement).value;
                            this.props.onTextKeyUpHandler(textareaText);
                        }
                        }>
                       {this.props.text}
                    </textarea>
                </div>
            );
        }
    }
}

export default SlideText;

