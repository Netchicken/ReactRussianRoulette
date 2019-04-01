import React, { Component } from 'react';
import pieAtYou from "../images/pieFireAtYou.jpeg";
import pieStart from "../images/pieStart.jpeg";
import pieThrow from "../images/pieThrow.jpeg";
import piePans from "../images/6PiePans.jpg";

import { Image } from 'react-bootstrap';


export class ImageLoading extends Component {
    displayName = "Images";

    constructor(props) {
        super(props);
        this.state = { isVisiblePieAtYou: true }; //start visible turn to false on fireaway
        this.state = { isVisiblePieStart: true }; //start visible turn to false on current count change
        this.state = { isVisiblePieThrow: true }; //start invisible turn to viible on fireaway

    }
    //triggers on change of a component - can be dodgy use with care (if you have different users)
    //   componentWillReceiveProps(nextProps) {

    //if (this.props.isFiringAway === true) {
    //    this.setState({ isVisiblePieAtYou: true });
    //    this.setState({ isVisiblePieThrow: false });
    //}

    //  if (this.props.isFiringAway === false) {
    //      this.setState({ isVisiblePieAtYou: false });


    //     if (nextProps.currentCount !== this.props.currentCount) {
    //    this.setState({ checkForCount: "Playing" });
    //just toggles for each cclick to see if it works
    //         this.setState({ isVisiblePieThrow: true });
    //     }


    // Any time props.isFiringAway changes, toggle images
    //  if (nextProps.isFiringAway !== this.props.isFiringAway) {

    //  this.setState({ isVisiblePieThrow: true });
    //  }
    //   }

    //  if(this.props.currentCount === 0) {
    // this.setState({ checkForCount: "Game Over" });
    //}

    //  }

    toggleImages = () => {
        this.setState({ isVisiblePieAtYou: !this.state.isVisiblePieAtYou });
        this.setState({ isVisiblePieStart: !this.state.isVisiblePieStart });
    }

    render() {
        return (
            <div>
                <Image width="50%" height="50%" src={piePans} alt="piepans" fluid roundedCircle />

                <p> <button onClick={this.toggleImages}> Toggle the image </button> </p>
                <p> <strong>{this.props.currentCount} Bullets - Fire Text {this.props.FireAwayText}
                </strong> </p>


                {
                    this.props.isFiringAway ? <Image src={pieAtYou} fluid roundedCircle alt="Pie Thrown At You" /> : null
                }
                {
                    this.state.isVisiblePieStart ? <Image src={pieStart} roundedCircle alt="Pie Start" /> :
                        null
                }
                {
                    this.state.isFiringAway ? null : <Image src={pieThrow} roundedCircle alt="Pie Throw" />
                }
            </div >
        );
    }

}


