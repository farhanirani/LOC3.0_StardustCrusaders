import React, { Component } from "react";
import "./Controller.css";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import ReplayIcon from "@material-ui/icons/Replay";

export default class Controller extends Component {
  render() {
    return (
      <div className="controller">
        <IconButton
          color="danger"
          aria-label="Pause/Play"
          component="span"
          onClick={this.props.onStartStop}
          style={{
            color: " #fff",
          }}
        >
          {this.props.isStart ? <PauseIcon /> : <PlayArrowIcon />}
        </IconButton>

        <IconButton
          color="success"
          aria-label="Pause/Play"
          component="span"
          onClick={this.props.onReset}
          style={{
            color: " red",
          }}
        >
          <ReplayIcon />
        </IconButton>
      </div>
    );
  }
}
