/// <reference path="../typings/tsd.d.ts" />

module SlideTitle {
    export interface SlideTitleProps {
        key: string;
        initialTitle: string;
        onTitleKeyUpHandler: (title: string) => void;
    }
    export interface SlideTitleState {
        text: string;
    }

    export class SlideTitle<P extends SlideTitleProps, S extends SlideTitleState> extends React.Component<SlideTitleProps, SlideTitleState> {
        state = {
            text: this.props.initialTitle
        };

        public render(): JSX.Element {
            return (
                <div>
                    <input
                        defaultValue={this.state.text}
                        onClick={(e) => { if ((e.target as HTMLInputElement).value == 'Click to add title') this.setState({ text: "" }); } }
                        onKeyUp={(e) => {
                            var inputText = (e.target as HTMLInputElement).value;
                            this.setState({ text: inputText });
                            this.props.onTitleKeyUpHandler(inputText);
                        }
                        }
                        />
                    </div>
            );
        }
    }
}

export default SlideTitle;
