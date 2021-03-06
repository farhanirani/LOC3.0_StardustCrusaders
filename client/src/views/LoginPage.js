import React, { useEffect, useState, useContext } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import { useHistory } from "react-router-dom";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import { AccountBox } from "../components/accountBox";
import Fade from "react-reveal/Fade";

import styles from "assets/jss/material-kit-react/views/loginPage.js";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      history.push("/");
    }
    // eslint-disable-next-line
  }, []);
  // const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  // setTimeout(function () {
  //   setCardAnimation("");
  // }, 700);

  return (
    <div>
      <Header
        absolute
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <div
        className={classes.pageHeader}
        style={{
          backgroundImage:
            "url(https://image.freepik.com/free-photo/caucasian-sport-abdominal-background-wall_1296-394.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "top center",
        }}
      >
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={4}>
              {/* <Card className={classes[cardAnimaton]}> */}
              <Fade top>
                <AccountBox />
              </Fade>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
