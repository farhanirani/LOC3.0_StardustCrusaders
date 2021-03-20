import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Palette from "@material-ui/icons/Palette";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import profile from "assets/img/faces/christian.jpg";
import UserStatistics from "./Sections/UserStatistics.js";

import work2 from "assets/img/examples/clem-onojeghuo.jpg";

import {
  ProductTitle,
  ProductCard,
  ProductImg,
  ProductInfo,
  ProductDesc,
  ProductButton,
} from "./Sections/Products/ProductsElements";
import styles from "assets/jss/material-kit-react/views/profilePage.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div>
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Kritik Gambhir</h3>
                    <h6>Enthusiast</h6>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={classes.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h3 className={classes.title}>Statistics</h3>
            </div>
            <UserStatistics />
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Regimen",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <ProductCard>
                            <ProductImg src={work2} alt="..." />
                            <ProductInfo>
                              <ProductTitle>Pyro is here</ProductTitle>
                              <ProductDesc>Do daily workout bois</ProductDesc>
                              <ProductButton>Start training</ProductButton>
                            </ProductInfo>
                          </ProductCard>
                          <ProductCard>
                            <ProductImg src={work2} alt="..." />
                            <ProductInfo>
                              <ProductTitle>Pyro is here</ProductTitle>
                              <ProductDesc>Do daily workout bois</ProductDesc>
                              <ProductButton>Start training</ProductButton>
                            </ProductInfo>
                          </ProductCard>
                          <ProductCard>
                            <ProductImg src={work2} alt="..." />
                            <ProductInfo>
                              <ProductTitle>Pyro is here</ProductTitle>
                              <ProductDesc>Do daily workout bois</ProductDesc>
                              <ProductButton>Start training</ProductButton>
                            </ProductInfo>
                          </ProductCard>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <div style={{ height: "40px", color: "transparent" }}></div>
    </div>
  );
}
