/// <reference path="../typings/tsd.d.ts" />

import Button from 'Button';
module ButtonDelete {
    export interface ButtonDeleteProps extends Button.ButtonProps {
    }
    interface ButtonDeleteState extends Button.ButtonState {
    }

    export class ButtonDelete extends Button.Button<ButtonDeleteProps, ButtonDeleteState> {
        public render(): JSX.Element {
            return (
                <div>
                  <Button.Button onClickHandler={this.props.onClickHandler} name={this.props.name}/>
                </div>
            );
        }
    }
}

export default ButtonDelete;

