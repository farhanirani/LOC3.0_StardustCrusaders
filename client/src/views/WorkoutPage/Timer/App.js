import React, { Component } from "react";
import Times from "./Times";
import Controller from "./Controller";
import TimerIcon from "@material-ui/icons/Timer";

export default class CountDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10),
      isStart: false,
      timerInterval: null,
    };

    this.onReset = this.onReset.bind(this);
    this.onStartStop = this.onStartStop.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.phaseControl = this.phaseControl.bind(this);
  }

  onReset() {
    this.setState({
      timeLeftInSecond: Number.parseInt(this.props.defaultSessionLength, 10),
      isStart: false,
      timerInterval: null,
    });

    this.state.timerInterval && clearInterval(this.state.timerInterval);
  }

  onStartStop() {
    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decreaseTimer();
          this.phaseControl();
        }, 1000),
      });
    } else {
      this.state.timerInterval && clearInterval(this.state.timerInterval);

      this.setState({
        isStart: !this.state.isStart,
        timerInterval: null,
      });
    }
  }

  decreaseTimer() {
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1,
    });
  }

  phaseControl() {
    if (this.state.timeLeftInSecond === 0) {
      console.log("Done");
    }
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <TimerIcon style={{ marginRight: "8px", color: "#FCFE9C" }} />
        <Times
          timeLabel={this.state.timeLabel}
          timeLeftInSecond={this.state.timeLeftInSecond}
        />

        <Controller
          onReset={this.onReset}
          onStartStop={this.onStartStop}
          isStart={this.state.isStart}
        />
      </div>
    );
  }
}
