import React, { Component } from 'react';
import pieAtYou from "../images/pieFireAtYou.jpeg";
import pieStart from "../images/pieStart.jpeg";
import pieThrow from "../images/pieThrow.jpeg";
import { fluid, roundedCircle, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';

//https://github.com/zeyadetman/howmanybooks/blob/master/src/components/Library/Library.jsx
//https://www.robinwieruch.de/react-pass-props-to-component/
//https://hackernoon.com/learn-react-js-how-to-build-a-simple-rock-paper-scissors-game-b57ca663ec02
//https://stackoverflow.com/questions/53742787/react-passing-boolean-value-to-component
export class ImageLoading extends Component {
    displayName = "Images";

    constructor(props) {
        super(props);
        this.state = { isVisiblePieAtYou: true }; //start visible turn to false on fireaway
        this.state = { isVisiblePieStart: true }; //start visible turn to false on current count change
        this.state = { isVisiblePieThrow: true }; //start invisible turn to viible on fireaway
        this.state = { isFiringAway: this.props.isFiringAway };
        this.state = { LocalCurrentCount: this.props.currentCount };
        this.state = { checkForCount: "test" };

        //Array from Counter
        //currentCount = { this.state.currentCount }
        //FireAwayText = { this.state.FireAwayText }
        //FireAway = { this.state.FireAway }
        //isFiringAway = { this.state.isFiringAway }
    }
    //triggers on change of a component - can be dodgy use with care (if you have different users)
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentCount !== this.props.currentCount) {
            this.setState({ checkForCount: "Playing" });
            //just toggles for each cclick to see if it works
            this.setState({ isVisiblePieThrow: true });
        }


        // Any time props.isFiringAway changes, toggle images
        if (nextProps.isFiringAway !== this.props.isFiringAway) {

            if (this.props.isFiringAway === true) {
                this.setState({ isVisiblePieAtYou: true });
                this.setState({ isVisiblePieThrow: false });
            }
            if (this.props.isFiringAway === false) {
                // this.setState({ isVisiblePieAtYou: false });
                this.setState({ isVisiblePieThrow: true });
            }
        }

        if (this.props.currentCount === 0) {
            this.setState({ checkForCount: "Game Over" });
        }

    }

    toggleImages = () => {
        this.setState({ isVisiblePieAtYou: !this.state.isVisiblePieAtYou });
        this.setState({ isVisiblePieStart: !this.state.isVisiblePieStart });
    }

    render() {
        return (
            <div>
                <p> <button onClick={this.toggleImages}> Toggle the image </button>
                    <strong>{this.props.currentCount} Bullets - See Image {this.state.checkForCount}  - Fire Text {this.props.FireAwayText}
                    </strong>
                </p>
                {
                    this.state.isVisiblePieAtYou ? <Image src={pieAtYou} fluid roundedCircle alt="Pie Thrown At You" /> : null
                }
                {
                    this.state.isVisiblePieStart ? <Image src={pieStart} roundedCircle alt="Pie Start" /> :
                        null
                }
                {
                    this.state.isVisiblePieThrow ? <Image src={pieThrow} roundedCircle alt="Pie Throw" /> :
                        null
                }
            </div >
        );
    }

}
 //  <img width="20%" height="20%" src={pieThrow} alt="FireAtYour" />
//array of paths
    //const imagesPath = {
    //    pieAtYou: "../images/pieFireAtYou.jpg",
    //    pieStart: "../images/pieStart.jpg",
    //    pieThrow: "../images/PieThrow.jpg"
    //};


    // this.state = { image: imagesPath[pieAtYou] };

