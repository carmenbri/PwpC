/// <reference path="./typings/tsd.d.ts" />

module SlideTitle {
    export interface SlideTitleProps {
       
    }
    export  interface SlideTitleState {
        text: string;
    }

    export class SlideTitle<P extends SlideTitleProps, S extends SlideTitleState> extends React.Component<SlideTitleProps, SlideTitleState> {
        state = {
            text: 'Click to add title'
        };

        public render(): JSX.Element {
            return (
                <div>
                    <input
                        value={this.state.text}
                        onClick={(e) => this.setState({ text: "" }) }
                        onChange={(e) => this.setState({ text: (e.target as HTMLInputElement).value }) }
                        />
                    </div>
            );
        }
    }
}

export default SlideTitle;
