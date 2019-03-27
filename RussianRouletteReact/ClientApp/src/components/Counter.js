import React, { Component } from 'react';
import { ImageLoading } from './ImageLoading';
import piePans from "../images/6PiePans.jpg";

//todo RND number generater
//todo counter 
//todo FireAway

//todo Fire method 
//todo Spin Method = passes the rnd to the counter
//https://github.com/zeyadetman/howmanybooks/blob/master/src/components/Library/Library.jsx
//https://hackernoon.com/learn-react-js-how-to-build-a-simple-rock-paper-scissors-game-b57ca663ec02
//https://devhints.io/react

export class Counter extends Component {
    displayName = "Russian Roulette";

    constructor(props) {
        super(props);
        //global variables

        //  const image = new Image();
        //  image.src = pieAtYou;

        //The “state” is the sum of the things inside of a React Component that can change AFTER that component is built.
        // The state of a React component is often used with a comparison to the props of that Component.Opposite to the state, the props cannot be modified once the component is created.
        this.state = {
            data: [{
                currentCount: 0,
                FireAway: 2,
                FireAwayText: "Ducking",
                isFiringAway: false,
                WinOrLose: ""
            }]
        };

        this.state = { currentCount: 0 };
        this.state = { random: Math.floor(1 + Math.random() * (7 - 1)) };
        this.state = { StartNumber: 0 };
        this.state = { FireAway: 2 };
        this.state = { BangText: "Bzzzz!" };
        this.state = { FireAwayText: "Ducking" };
        this.state = { isFiringAway: false };
        this.state = { WinOrLose: "" };

        //bind Methods to buttons
        this.Counter = this.CountDown.bind(this);
        this.Spin = this.Spin.bind(this);
        this.FireAwayCounter = this.FireAwayCounter.bind(this);
    }

    //spin Method
    Spin() {
        this.Reset();
        this.GamePlay();
    }

    //setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.

    //Reset for new round   
    Reset() {
        const min = 1;
        const max = 7;
        this.setState((state) => { return { random: Math.floor(min + Math.random() * (max - min)) }; });//shows the intial spin number 

        this.setState((state) => { return { currentCount: this.state.random }; }); //bullets count
        this.setState((state) => { return { StartNumber: this.state.random }; }); //shows the countdown number
        this.setState((state) => { return { FireAway: 2 }; });
        this.setState({ WinOrLose: "Game On!" });
        this.setState({ BangText: "Squelch Squelch" });
        this.setState({ WinOrLose: "" });
        this.setState({ FireAwayText: "Throwing At You" });
        this.setState({ isFiringAway: false });
    }

    //Fire Method
    CountDown() {
        //Calls to setState are asynchronous - don’t rely on this.state to reflect the new value immediately after calling setState. Pass an updater function instead of an object if you need to compute values based on the current state

        this.setState((state) => {
            return { currentCount: this.state.currentCount - 1 };
        });
        this.GamePlay();
    }
    //Fireaway Method
    FireAwayCounter() {
        this.setState((state) => { return { FireAway: this.state.FireAway - 1 }; });
        this.setState((state) => { return { isFiringAway: !this.state.isFiringAway }; });

        if (this.state.FireAway <= 0) {
            this.setState({ FireAway: 0 });
            this.setState({ FireAwayText: "No More Ducking!" });
            this.setState({ isFiringAway: false });
        }

    }

    //Win or lose and final calculations
    GamePlay() {
        if (this.state.isFiringAway === true && this.state.currentCount > 0) {
            this.setState({ BangText: "Splog!" });
            this.setState({ FireAwayText: "Ducking! " });
        }
        if (this.state.isFiringAway === false && this.state.currentCount > 0) {
            this.setState({ BangText: "Splat!" });
            this.setState({ FireAwayText: "Throwing At You" });
        }
        if (this.state.isFiringAway === true && this.state.currentCount === 1) {
            this.setState({ WinOrLose: "Winner" });
        }
        if (this.state.isFiringAway === false && this.state.currentCount === 1) {
            this.setState({ WinOrLose: "Lose" });
        }
        this.setState((state) => { return { isFiringAway: false }; });
    }
    render() {
        return (
            <div>
                <h1>Russian Roulette <strong>{this.state.WinOrLose}</strong></h1>
                There is a pie aimed at you. Duck when its thrown and you win
                <br></br>You have 2 chances to duck, you have 1 chance in 6 of getting hit
                 <img width="20%" height="20%" src={piePans} alt="piepans" />

                <p>Sound Effects <strong>{this.state.BangText}</strong>. </p>
                <p>Ducking countdown: <strong> {this.state.FireAway}  {this.state.isFiringAway ? "True" : "False"}</strong>.</p>
                <p>Am I Ducking? <strong>{this.state.FireAwayText} </strong>.</p>

                <p>Pie Number: <strong>{this.state.StartNumber}</strong>   -   <strong>{this.state.currentCount} Pie Tins</strong></p>

                <button onClick={this.Spin}>Make the Pie</button>
                <button onClick={this.Counter}>Throw the Pie Tin</button>
                <button onClick={this.FireAwayCounter}>Duck</button>

                <ImageLoading currentCount={this.state.currentCount}
                    FireAwayText={this.state.FireAwayText}
                    FireAway={this.state.FireAway}
                    isFiringAway={this.state.isFiringAway}
                />
            </div >
        );
    }
}
