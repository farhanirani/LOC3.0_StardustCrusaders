import React from "react";
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
  const { ...rest } = props;
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
            Strength Training
          </h2>
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
              Category : CategoryName
            </h4>
            <h5
              style={{
                fontWeight: "700px",
                textAlign: "center",
                margin: "0",
                padding: "5px",
              }}
            >
              Duration : 5 Min 20 Sec
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
                marginBottom: "40px",
              }}
            >
              Workouts
            </h3>
            {/* <div
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
                Workout Name
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <CountDown defaultSessionLength="90" />
                </div>
              </div>
            </div> */}
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
                Workout Name
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <CountDown defaultSessionLength="50" />
                </div>
              </div>
            </div>
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
                Workout Name
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div>
                  <CountDown defaultSessionLength="90" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
