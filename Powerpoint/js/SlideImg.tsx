/// <reference path="../typings/tsd.d.ts" />

import SlideTitle from 'SlideTitle';
module SlideImg {
    export interface SlideImgProps {
        image: string;
        onImageUpload: (image: string) => void;
    }
    interface SlideImgState {
    }

    export class SlideImg extends React.Component<SlideImgProps, SlideImgState> {

        public render(): JSX.Element {
            return (
                <div>
                <input type="file" accept="image/*"
                    defaultValue= {this.props.image}
                    onChange={(e) => {
                        var imagePath = (e.target as HTMLInputElement).value;
                        this.props.onImageUpload(imagePath);
                    }
                    }
                    />
                    </div>
            );
        }
    }
}

export default SlideImg;

