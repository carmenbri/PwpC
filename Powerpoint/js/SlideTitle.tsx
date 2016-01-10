/// <reference path="../typings/tsd.d.ts" />

module SlideTitle {
    export interface SlideTitleProps {
        key: string;
        title: string;
        onTitleKeyUpHandler: (title: string) => void;
    }
    export interface SlideTitleState {
    }

    export class SlideTitle extends React.Component<SlideTitleProps, SlideTitleState> {
        public render(): JSX.Element {
            return (
                <div>
                    <input
                        defaultValue= {this.props.title}
                        placeholder="Click to add title"
                        onKeyUp={(e) => {
                            var titleText = (e.target as HTMLInputElement).value;
                            this.props.onTitleKeyUpHandler(titleText);
                        }
                        }
                        />
                    </div>
            );
        }
    }
}

export default SlideTitle;
