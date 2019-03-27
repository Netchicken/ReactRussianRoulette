import React, { Component } from 'react';
import pieAtYou from "../images/pieFireAtYou.jpg";
import pieStart from "../images/pieStart.jpg";
import pieThrow from "../images/PieThrow.jpg";


//https://github.com/zeyadetman/howmanybooks/blob/master/src/components/Library/Library.jsx
//https://www.robinwieruch.de/react-pass-props-to-component/
//https://hackernoon.com/learn-react-js-how-to-build-a-simple-rock-paper-scissors-game-b57ca663ec02
//https://stackoverflow.com/questions/53742787/react-passing-boolean-value-to-component
export class ImageLoading extends Component {
    displayName = "Images";

    constructor(props) {
        super(props);
        this.state = { isVisiblepieAtYou: true }; //start visible turn to false on fireaway
        this.state = { isVisiblePieStart: true }; //start visible turn to false on current count change
        this.state = { isVisiblePiethrow: true };
        this.state = { isFiringAway: this.props.isFiringAway };
        this.state = { LocalCurrentCount: this.props.currentCount };

        //Array from Counter
        //currentCount = { this.state.currentCount }
        //FireAwayText = { this.state.FireAwayText }
        //FireAway = { this.state.FireAway }
        //isFiringAway = { this.state.isFiringAway }
    }
    //triggers on change of a component - can be dodgy use with care (if you have different users)
    componentWillReceiveProps(nextProps) {
        // Any time props.isFiringAway changes, toggle images
                if (nextProps.isFiringAway !== this.props.isFiringAway) {

            if (this.props.isFiringAway === true) {
                this.setState({ isVisiblepieAtYou: !this.state.isVisiblepieAtYou });
            }
            if (this.props.isFiringAway === false) {
                this.setState({ isVisiblepieAtYou: !this.state.isVisiblepieAtYou });
                this.setState({ isVisiblePieThrow: !this.state.isVisiblePieThrow });
            }
        }
    }

    toggleImages = () => {
        this.setState({ isVisiblepieAtYou: !this.state.isVisiblepieAtYou });
        this.setState({ isVisiblePieStart: !this.state.isVisiblePieStart });
    }

    render() {
        return (
            <div>
                <p> <button onClick={this.toggleImages}> Toggle the image </button>
                    <strong>{this.props.currentCount} Bullets - See Image {this.state.SeeImage}  - Fire Text {this.props.FireAwayText}
                    </strong>
                </p>

                {
                    this.props.currentCount === 3 ? this.toggleImages : null
                }

                {
                    this.state.isVisiblepieAtYou ? <img width="20%" height="20%" src={pieAtYou} /> : null
                }
                {
                    this.state.isVisiblePieStart ? <img width="20%" height="20%" src={pieStart} /> :
                        null
                }

                {
                    this.state.isVisiblePieThrow ? <img width="20%" height="20%" src={pieThrow} /> :
                        null
                }


              //  <img width="20%" height="20%" src={pieThrow} alt="FireAtYour" />
            </div >
        );
    }

}

//array of paths
    //const imagesPath = {
    //    pieAtYou: "../images/pieFireAtYou.jpg",
    //    pieStart: "../images/pieStart.jpg",
    //    pieThrow: "../images/PieThrow.jpg"
    //};


    // this.state = { image: imagesPath[pieAtYou] };

