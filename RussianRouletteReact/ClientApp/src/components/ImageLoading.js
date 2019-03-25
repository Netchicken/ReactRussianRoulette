import React, { Component } from 'react';
import pieAtYou from "../images/pieFireAtYou.jpg";
import pieStart from "../images/pieStart.jpg";
import pieThrow from "../images/PieThrow.jpg";

//https://www.robinwieruch.de/react-pass-props-to-component/
//https://hackernoon.com/learn-react-js-how-to-build-a-simple-rock-paper-scissors-game-b57ca663ec02

export class ImageLoading extends Component {
    displayName = "Images";

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p><strong>{this.props.counter} Bullets</strong></p>

                <img src={pieAtYou} alt="FireAtYour" />
                <img src={pieStart} alt="FireAtYour" />
                <img src={pieThrow} alt="FireAtYour" />
            </div >
        );
    }

}
//export default ImageLoading; // Don’t forget to use export default!
