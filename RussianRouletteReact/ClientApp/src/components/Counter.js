import React, { Component } from 'react';
import { ImageLoading } from './ImageLoading';
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
                FireAwayText: "Fire Away now!",
                isFiringAway: false,
                WinOrLose: ""
            }]
        };

        this.state = { currentCount: 0 };
        this.state = { random: 0 };
        this.state = { StartNumber: 0 };
        this.state = { FireAway: 2 };
        this.state = { BangText: "Bzzzz!" };
        this.state = { FireAwayText: "Fire Away now!" };
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
        this.setState({ random: Math.floor(min + Math.random() * (max - min)) });//shows the intial spin number 

        this.setState({ currentCount: this.state.random }); //bullets count
        this.setState({ StartNumber: this.state.random }); //shows the countdown number
        this.setState({ FireAway: 2 });
        this.setState({ WinOrLose: "Game On!" });
        this.setState({ BangText: "Bzzzzzzzzzz" });
        this.setState({ WinOrLose: "" });
        // this.setState({ FireAwayText: "Firing Away! " });
    }


    //Fire Method
    CountDown() {
        //Calls to setState are asynchronous - don’t rely on this.state to reflect the new value immediately after calling setState. Pass an updater function instead of an object if you need to compute values based on the current state

        this.setState((state) => {
            return { currentCount: this.state.currentCount - 1 };
        });

        this.setState({ isFiringAway: false });
        this.GamePlay();
    }
    //Fireaway Method
    FireAwayCounter() {
        this.setState({ FireAway: this.state.FireAway - 1 });
        this.setState({ isFiringAway: true });
        // this.GamePlay();

        if (this.state.FireAway === 0) {
            this.setState({ FireAway: 0 });
            this.setState({ FireAwayText: "No More Fire Away!" });
            this.setState({ isFiringAway: false });
        }

    }

    //Win or lose and final calculations
    GamePlay() {
        if (this.state.isFiringAway === true && this.state.currentCount > 0) {
            this.setState({ BangText: "PING!" });
            this.setState({ FireAwayText: "Firing Away! " });
        }
        if (this.state.isFiringAway === false && this.state.currentCount > 0) {
            this.setState({ BangText: "BANG!" });
            this.setState({ FireAwayText: "Firing At You" });
        }
        if (this.state.isFiringAway === true && this.state.currentCount === 1) {
            this.setState({ WinOrLose: "Winner" });
        }
        if (this.state.isFiringAway === false && this.state.currentCount === 1) {
            this.setState({ WinOrLose: "Lose" });
        }
    }
    render() {
        return (
            <div>
                <h1>Russian Roulette <strong>{this.state.WinOrLose}</strong></h1>
                <p>Sound Effects <strong>{this.state.BangText}</strong>.</p>
                <p>Fire Away countdown: <strong> {this.state.FireAway}</strong>.</p>
                <p>Am I Firing Away? <strong>{this.state.FireAwayText} </strong>.</p>

                <p>Spin Number: <strong>{this.state.StartNumber}</strong>   -   <strong>{this.state.currentCount} Bullets</strong></p>

                <button onClick={this.Spin}>Spin the Chamber</button>
                <button onClick={this.Counter}>Fire the Gun</button>
                <button onClick={this.FireAwayCounter}>Point Gun Away</button>

                <ImageLoading currentCount={this.state.currentCount}
                    FireAwayText={this.state.FireAwayText}
                    FireAway={this.state.FireAway}
                    isFiringAway={this.state.isFiringAway}
                />
            </div >


        );
    }
}
