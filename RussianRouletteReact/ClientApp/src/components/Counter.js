import React, { Component } from 'react';
import { ImageLoading } from './ImageLoading';
import { Grid, Row, Col } from 'react-bootstrap';
import { fluid, roundedCircle } from 'react-bootstrap';


export class Counter extends Component {
    displayName = "Russian Roulette";

    constructor(props) {
        super(props);

        //Constructor is the only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.

        //Avoid copying props into state! This is a common mistake:

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

        //capture multiple fireaways without the counter decreasing
        if (this.state.isFiringAway === true) {
            return null;

        }
        this.setState((state) => { return { FireAway: this.state.FireAway - 1 }; });
        // this.setState((state) => { return { isFiringAway: true }; });
        this.setState({ FireAwayText: "Ducking! " });
        this.setState({ BangText: "Splog!" });
        this.setState({ isFiringAway: true });

        if (this.state.FireAway <= 0) {
            this.setState({ FireAway: 0 });
            this.setState({ FireAwayText: "No More Ducking!" });
            this.setState({ isFiringAway: false });
        }
        //  this.GamePlay();
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
        this.setState({ isFiringAway: false });
    }
    render() {
        return (

            <Grid fluid>
                <Row>

                    <Col xs={6} md={8}>
                        <h1>Russian Roulette <strong>{this.state.WinOrLose}</strong></h1>
                        There is a pie aimed at you. Duck when its thrown and you win
                <br></br>You have 2 chances to duck, you have 1 chance in 6 of getting hit
                                                                                                          
                <p>Sound Effects <strong>{this.state.BangText}</strong>. </p>
                        <p>Ducking countdown: <strong> {this.state.FireAway}  {this.state.isFiringAway ? "True" : "False"}</strong>.</p>
                        <p>Am I Ducking? <strong>{this.state.FireAwayText} </strong>.</p>

                        <p>Pie Number: <strong>{this.state.StartNumber}</strong>   -   <strong>{this.state.currentCount} Pie Tins</strong></p>

                        <button onClick={this.Spin}>Make the Pie</button>
                        <button onClick={this.Counter}>Throw the Pie Tin</button>
                        <button onClick={this.FireAwayCounter}>Duck</button>

                    </Col>
                    <Col xs={6} md={4}>
                        <ImageLoading
                            currentCount={this.state.currentCount}
                            FireAwayText={this.state.FireAwayText}
                            FireAway={this.state.FireAway}
                            isFiringAway={this.state.isFiringAway}
                        />
                    </Col>
                </Row>

            </Grid >

        );
    }
}
