import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import CountDown from "views/WorkoutPage/Timer/App";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const history = useHistory();
  const [workoutinfo, setWinfo] = useState([]);
  const [steps, setSteps] = useState([]);
  const wid = window.location.pathname.substring(9);
  const [render, setRender] = useState(false);
  const [tt, setTt] = useState(0);

  useEffect(() => {
    (async () => {
      const tempdata = await axios.get("/api/workout/" + wid);
      setWinfo(tempdata.data);
      setRender(true);
      // console.log(tempdata.data);

      for (var i = 1; i < tempdata.data.length; i++) {
        setSteps((steps) => [...steps, tempdata.data[i]]);
        console.log(tempdata.data[i].duration);
        setTt((tt) => tt + tempdata.data[i].duration);
      }
    })();
  }, []);

  const { ...rest } = props;
  if (render) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#000000",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <div
          className={classNames(classes.main, classes.mainRaised)}
          style={{ marginTop: "120px", background: "#1D1D1D", padding: "20px" }}
        >
          <div className={classes.container} style={{ alignItems: "center" }}>
            <h2
              style={{
                textAlign: "center",
                color: "#fff",
                alignContent: "center",
              }}
            >
              {workoutinfo[0].name}
            </h2>
            <h4
              style={{
                textAlign: "center",
                color: "#fff",
                alignContent: "center",
              }}
            >
              {workoutinfo[0].desc}
            </h4>
            <div style={{ padding: "20px", width: "100%" }}></div>
            <div
              className={classes.container}
              style={{
                alignItems: "center",
                textAlign: "center",
                border: "1px solid #FCFE9C",
                borderRadius: "10px",
                width: "300px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <h4
                style={{
                  fontWeight: "700px",
                  textAlign: "center",
                  margin: "0",
                  padding: "5px",
                }}
              >
                Category : {workoutinfo[0].category}
              </h4>
              <h5
                style={{
                  fontWeight: "700px",
                  textAlign: "center",
                  margin: "0",
                  padding: "5px",
                }}
              >
                Duration : {tt}
              </h5>
            </div>
            <div
              style={{
                justifyContent: "start",
                alignItems: "left",
              }}
            >
              <h3
                style={{
                  fontWeight: "700px",
                  textAlign: "center",
                  color: "#FCFE9C",
                  marginBottom: "10px",
                  marginTop: "30px",
                }}
              >
                Steps
              </h3>
              {steps.map((step) => (
                <div
                  style={{
                    maxWidth: "700px",
                    border: "1px solid #FCFE9C",
                    minHeight: "30px",
                    display: "flex",
                    margin: "15px auto",
                    borderRadius: "10px",
                    padding: "10px 20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      flexGrow: "4",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    {step.information}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <CountDown defaultSessionLength={step.duration} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
