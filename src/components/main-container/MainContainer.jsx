import React, { useState } from "react";
import { Box, Button, makeStyles, Paper, Typography } from "@material-ui/core";
import data from "/src/birthDaysData.js";
import BirthDayList from "../birthday-list";

const useStyles = makeStyles({
  backdrop: {
    height: "100%",
    width: 500,
    background: "#85DCB",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  centerTitleText: {
    height: 50,
    fontFamily: "Anton , sans - serif",
    fontWeight: 500,
    width: 200,
    marginTop: 10,
  },
  clearBtn: {
    marginBottom: "20px",
    width: 300,
    background: "#41B3A3",
    "&:hover": {
      background: "#41B3A3",
    },
    "&:active": {
      background: "#41B3A3",
    },
    color: "#FFFF",
    marginBottom: 10,
  },
});

export function MainContainer() {
  const classes = useStyles();
  const [people, setPeople] = useState(data);
  return (
    <main className="main">
      <Paper className={classes.backdrop} elevation={5}>
        <Typography variant="h5" classes={{ root: classes.centerTitleText }}>
          {people.length} Birthdays Today
        </Typography>
        <BirthDayList people={people}></BirthDayList>
        <Button
          variant="contained"
          classes={{ root: classes.clearBtn }}
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All
        </Button>
      </Paper>
    </main>
  );
}
