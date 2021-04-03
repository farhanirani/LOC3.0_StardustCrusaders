import React, { useEffect, useState } from "react";
import axios from "axios";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";
import CountDown from "views/WorkoutPage/Timer/App";
import Button from "@material-ui/core/Button";
import Flip from "react-reveal/Flip";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ReportIcon from "@material-ui/icons/Report";
import { useHistory } from "react-router-dom";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const [workoutinfo, setWinfo] = useState([]);
  const [steps, setSteps] = useState([]);
  const wid = window.location.pathname.substring(9);
  const [render, setRender] = useState(false);
  const [tt, setTt] = useState(0);
  const tokenn = localStorage.getItem("auth-token");
  const postId = window.location.pathname.substring(9);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!tokenn) {
        alert("Please login first");
      } else {
        const loginRes = await axios.post(
          "/api/workout/completed/" + postId,
          {},
          { headers: { "x-auth-token": tokenn } }
        );
        history.push("/profile");
      }
    } catch (err) {
      console.log(err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  const min = (tt - (tt % 60)) / 60;
  const sec = tt % 60;

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
                fontSize: "3rem",
                fontWeight: "700",
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
                  fontWeight: "700",
                  fontSize: "21px",
                  textAlign: "center",
                  margin: "0",
                  padding: "5px",
                }}
              >
                Category : {workoutinfo[0].category}
              </h4>
              <h5
                style={{
                  textAlign: "center",
                  margin: "0",
                  padding: "5px",
                  color: "#bcbfc8",
                  fontSize: "17px",
                  fontWeight: "normal",
                }}
              >
                Duration : {min} min. {sec} sec.
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
                  fontWeight: "700",
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
                    <a
                      href="/"
                      target="_blank"
                      style={{
                        color: "#FCFE9C",
                        margin: "0px 10px",
                        fontSize: "18px",
                        textDecoration: "underline",
                      }}
                    >
                      Tutorial{" "}
                    </a>
                    <div>
                      <CountDown defaultSessionLength={step.duration} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "100px",
            }}
          >
            <Flip top>
              <Button
                variant="contained"
                size="large"
                style={{
                  background: "#FCFE9C",
                  borderRadius: "20px",
                  color: "#1D1D1D",
                  fontWeight: "700",
                }}
                onClick={handleSubmit}
              >
                Workout Completed!
              </Button>
            </Flip>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              style={{ margin: "10px", color: "red" }}
            >
              <FavoriteBorderIcon style={{ height: "30px", width: "30px" }} />
            </IconButton>
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
              style={{ margin: "10px" }}
            >
              <ReportIcon style={{ height: "30px", width: "30px" }} />
            </IconButton>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
