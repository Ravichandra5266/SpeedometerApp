import { Component } from "react";
import "./index.css";

class Speedometer extends Component {
  state = {
    speed: 0,
  };
  onAcclerate = () => {
    const { speed } = this.state;
    if (speed < 200) {
      this.setState((prevSpeed) => {
        return {
          speed: prevSpeed.speed + 10,
        };
      });
    }
  };
  onBreak = () => {
    const { speed } = this.state;
    if (speed > 0) {
      this.setState((prevSpeed) => {
        return {
          speed: prevSpeed.speed - 10,
        };
      });
    }
  };
  render() {
    const { speed } = this.state;
    return (
      <div className="container d-flex flex-column align-items-center justify-content-center">
        <div className="row">
          <div className="bg-dark ">
            <h2 className="text-white text-center">Speedometer</h2>
            <img
              src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
              alt="speedometer"
              className="image-fluid"
              width={"100%"}
            />
            <h1 className="text-center text-white">{`Speed Is ${speed}`}</h1>
            <p className="text-white text-center">
              Min Speed Limit 0mph & Max Speed Limit 200mph
            </p>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <button
                type="button"
                className="btn btn-primary m-2"
                onClick={this.onAcclerate}
              >
                Accelerate
              </button>
              <button
                type="button"
                className="btn btn-warning m-2"
                onClick={this.onBreak}
              >
                Apply Break
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Speedometer;
