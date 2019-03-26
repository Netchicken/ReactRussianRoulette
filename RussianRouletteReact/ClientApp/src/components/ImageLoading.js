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
        this.state = { isVisible: true };
        this.state = { SeeImage: "Yes" };
        // this.state = { isFiringAway: this.props.isFiringAway }; //not working
        this.state = { currentCount: this.props.currentCount }; //not working
        //  this.state = { FireAwayText: "No Data" };
        this.selectImage();


        //currentCount = { this.state.currentCount }
        //FireAwayText = { this.state.FireAwayText }
        //FireAway = { this.state.FireAway }
        //isFiringAway = { this.state.isFiringAway }


    }
    selectImage() {
        const currentcount = this.props.currentCount;
        //   const FireAwayText = this.props.FireAwayText;

        if (currentcount > 3) {
            this.setState({ isVisible: !this.state.isVisible });
            this.setState({ SeeImage: "No" });
        }
        //if (isfiringaway) {
        //    this.setState({ FireAwayText: "Firing Away! " });
        //}
        //if (isfiringaway === false) {
        //    this.setState({ FireAwayText: "Firing At You! " });
        //}
    }

    render() {
        return (
            <div>
                <p> <button onClick={() => this.setState({ isVisible: !this.state.isVisible })}>
                    Toggle the image </button><strong>{this.props.currentCount} Bullets - See Image {this.state.SeeImage}  - Fire Text {this.props.FireAwayText}</strong></p>


                {this.state.isVisible ? <img width="20%" height="20%" src={pieAtYou} /> : this.state.SeeImage
                }
                <img width="20%" height="20%" src={pieStart} alt="FireAtYour" />
                <img width="20%" height="20%" src={pieThrow} alt="FireAtYour" />
            </div >
        );
    }

}
//export default ImageLoading; // Don’t forget to use export default!
                //<img src={pieAtYou} alt="FireAtYour" />  

//array of paths
    //const imagesPath = {
    //    pieAtYou: "../images/pieFireAtYou.jpg",
    //    pieStart: "../images/pieStart.jpg",
    //    pieThrow: "../images/PieThrow.jpg"
    //};


    // this.state = { image: imagesPath[pieAtYou] };

