/// <reference path="./typings/tsd.d.ts" />
module Button {
    export interface ButtonProps {
        name?: string;
        onClickHandler?: () => void;
    }
    export interface ButtonState {
      
    }
    export class Button<P extends ButtonProps, S extends ButtonState> extends React.Component<ButtonProps, ButtonState> {
        public render(): JSX.Element {
            return (
                <div>
                    <button onClick={this.props.onClickHandler}>
                        {this.props.name}
                        </button>
                    </div>
            );
        }
    }
}

export default Button;

