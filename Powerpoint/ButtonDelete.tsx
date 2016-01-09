/// <reference path="./typings/tsd.d.ts" />
import Button from './Button';
module ButtonDelete {
    export interface ButtonDeleteProps extends Button.ButtonProps {
        text?: string;
    }
    interface ButtonDeleteState extends Button.ButtonState {
        name: string;
    }

    export class ButtonDelete extends Button.Button<ButtonDeleteProps, ButtonDeleteState> {
        state = {
            name: "Delete slide"
        };

        private deleteSlide() {
            console.log("assaas");
            this.setState({
                //currentSlideType: slideOption
            });
        }
        public render(): JSX.Element {
            return (
                <div>
                  <Button.Button name="Delete slide" onClickHandler={this.deleteSlide.bind(this) } />
                    </div>
            );
        }
    }
}

export default ButtonDelete;

