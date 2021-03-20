import React, { useEffect, useState } from "react";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Header from "components/Header/Header.js";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import axios from "axios";
import "./leaderboard.css";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    opacity: "0.7",
    "& > *": {
      marginTop: "105px",
      marginLeft: "auto",
      marginRight: "auto",
      width: "85%",
      height: "calc(100vh - 140px)",
      overflowY: "scroll",
      overflowX: "scroll",
    },
    overflow: "hidden",
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Leaderboard() {
  const classes = useStyles();
  const [Leaderboard, setLeaderboard] = useState([]);
  const [age, setAge] = React.useState("10");

  const handleChange = (event) => {
    setAge(event.target.value);
    (async () => {
      if (event.target.value == 10) {
        const forumdata = await axios.get("/api/workout/leaderboard");
        var c = 0;
        for (var i = 0; i < forumdata.data.length; i++) {
          forumdata.data[i].iter = i + 1;
        }
        setLeaderboard(forumdata.data);
        console.log(forumdata.data);
      } else {
        const forumdata = await axios.get("/api/workout/todayleaderboard");
        var c = 0;
        for (var i = 0; i < forumdata.data.length; i++) {
          forumdata.data[i].iter = i + 1;
        }
        setLeaderboard(forumdata.data);
        console.log(forumdata.data);
      }
    })();
  };

  useEffect(() => {
    (async () => {
      const forumdata = await axios.get("/api/workout/leaderboard");
      var c = 0;
      for (var i = 0; i < forumdata.data.length; i++) {
        forumdata.data[i].iter = i + 1;
      }
      setLeaderboard(forumdata.data);
      console.log(forumdata.data);
    })();
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url("https://images5.alphacoders.com/387/thumb-1920-387340.jpg")`,
        backgroundSize: "cover",
        opacity: "0.5",
      }}
    >
      <Header
        color="transparent"
        brand="Material Kit React"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
      />
      <div className={classes.root}>
        <Paper elevation={3}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                color: "black",
                fontWeight: "bold",
                opacity: "1",
                marginRight: "30px",
              }}
            >
              LEADERBOARD
            </h3>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
              >
                <MenuItem value={10}>All Time</MenuItem>
                <MenuItem value={20}>Today's Leaderboard</MenuItem>
              </Select>
            </FormControl>
          </div>

          <TableContainer component={Paper}>
            <Table className={`leaderboard_table`} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Rank</TableCell>
                  <TableCell align="center">Username</TableCell>
                  <TableCell align="right">Total calories burnt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Leaderboard.map((row) => (
                  <TableRow key={row._id}>
                    <TableCell component="th" scope="row">
                      {row.iter}
                    </TableCell>
                    <TableCell align="center">{row.username}</TableCell>
                    <TableCell align="right">{row.totalcalories}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
}

export default Leaderboard;
